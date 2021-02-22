module.exports = app => {
  const { router, controller } = app;
  router.get('/getList', controller.getList.index);
  router.get('/getMarkDown', controller.getMarkDown.index);
};
