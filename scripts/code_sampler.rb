#! /usr/bin/env ruby

# ******************************
# CODE SAMPLER Script
# ******************************
# == Synopsis 
#
# == Examples
#
#
# == Usage 
#
# == Author
# Evin Grano
#
# == Copyright
#
require 'rubygems'
require 'find'
require 'ftools'
require 'fileutils'
class CodeSampler
  
  #instance vars
  def initialize()
      #init stuff....
  end
  
  def run()
    @code = {}
    @code_name = []
    code_root = File.expand_path("~/workarea/projects/scui-samples/apps/samples/resources")
    code_file = File.expand_path("~/workarea/projects/scui-samples/apps/samples/core_code.js")
    puts 'Started the Resources directory';
    search_and_process(code_root)
    write_to_code_file(code_file)
  end
  
  protected
   
  def search_and_process(src_path)
    puts 'Start In: ' + src_path
    Find.find(src_path) do |entry|
      if File.file?(entry) 
        ext = File.extname(entry);
        process_file_for_code(entry) if (ext == '.js')
      else
        puts 'Error'
      end
    end
  end
  
  def process_file_for_code(check_file)
    puts "Processing: #{check_file}"
    f = File.open(check_file, 'r');
    begin_code = false
    name = "test"
    while line = f.gets  
      line.rstrip!
      name_start = line.index(/@@CODE\[/)
      begin_code = name_start ? true : false
      if (begin_code)
        name_start += 7
        name_end = line.rindex("]")-1
        len = name_end - name_start
        puts "Name: start=#{name_start}, end=#{name_end}"
        if len > 0
          name = line[name_start..name_end]
          @code_name.push(name)
          @code[name] = ""
          lines_processed = process_code_sample(f, name)
          puts "Found #{lines_processed} lines of Code Sample for [#{name}]..."
          #puts @code[name]
        end
      end
    end
    f.close()
  end
  
  def process_code_sample(f, name)
    end_of_code = false
    count = 0
    while !end_of_code && line = f.gets
      line.rstrip!
      line.gsub!("\"", "\\\"")
      #puts "Code to retrieve: #{line}"
      end_of_code = line.index(/@@END_CODE/) ? true : false
      @code[name] += "#{line}\\n" unless end_of_code
      count += 1
    end
    count
  end
  
  def write_to_code_file(code_file)
    len = @code_name.length
    if len > 0
      puts "Writing Out #{@code_name.length} Code Samples!"
      f = File.open(code_file, 'w');
      f.puts "// =========================================================================="
      f.puts "// Project:   SCUI Samples: Code Samples"
      f.puts "// Copyright: 2009-2010 Evin Grano and Contributors"
      f.puts "// =========================================================================="
      f.puts "\/*globals Samples *\/\n\n"
      f.puts "Samples.codeSamples = SC.Object.create({"
      @code_name.each_index do |x|
        name = @code_name[x]
        code = @code[name]
        f.puts "  #{name}: \"#{code}\"," if len-1 > x
        f.puts "  #{name}: \"#{code}\"" if len-1 == x
      end
      f.puts "});"
      f.close()
    else
      puts "ERROR: No Code Processed!"
    end
  end
end
app = CodeSampler.new
app.run