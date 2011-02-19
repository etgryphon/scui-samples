# ===========================================================================
# Project:   Scui-sampleapp/
# Copyright: ©2009 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

# CORE FRAMEWORKS
config :scui, :required => [:sproutcore, :'scui/foundation', :'scui/calendar', :'scui/dashboard']

# This configuration section will be applied to all bundles used by your
# application, even bundles that come from other gems.
config :samples do |c|
  c[:required] = [:sproutcore, :scui]
  c[:theme] = :'scui/standard_theme'
end
