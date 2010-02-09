/*globals TestApp */

sc_require('core');
sc_require('controllers/content');
sc_require('views/widget_edit');

TestApp.mainPage = SC.Page.create({
  
  pageName: 'TestApp.mainPage',
  
  mainPane: SC.MainPane.design({

    childViews: ['mainView'],

    mainView: SC.View.design({
      layout: { left: 0, right: 0, top: 0, bottom: 0 },
      childViews: ['beginManagingView', 'endManagingView', 'addButtonView', 'dashboardView'],
      
      beginManagingView: SC.ButtonView.design({
        layout: { left: 100, top: 50, width: 150, height: 24 },
        title: "Begin Managing",
        target: 'TestApp.mainPage.mainPane.mainView.dashboardView',
        action: 'beginManaging'
      }),

      endManagingView: SC.ButtonView.design({
        layout: { left: 270, top: 50, width: 150, height: 24 },
        title: "Stop Managing",
        target: 'TestApp.mainPage.mainPane.mainView.dashboardView',
        action: 'endManaging'
      }),

      addButtonView: SC.ButtonView.design({
        layout: { right: 100, top: 50, width: 150, height: 24 },
        title: "Add a Widget",
        target: TestApp.contentController,
        action: 'addWidget'
      }),
      
      dashboardView: SCUI.DashboardView.design({
        layout: { left: 100, top: 100, right: 100, bottom: 100 },
        backgroundColor: 'white',
        contentBinding: 'TestApp.contentController.arrangedObjects'
      })
    })

  })
  
});
