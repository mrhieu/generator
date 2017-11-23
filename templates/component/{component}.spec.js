'user strict';

describe('Component: {Name}', () => {
  let ctrl;
  let $componentController;// use this sugar instead of $compile

  // Register all Services, Directives, Components, Filters
  beforeEach(angular.mock.module('dashboard'));

  beforeEach(inject((_$componentController_) => {
    // This should match the declared attributes and events of this component
    let bindings = {};

    $componentController = _$componentController_;
    ctrl = $componentController('{name}', null, bindings);
    ctrl.$onInit();// Don't forget to simulate the $onInit lifecycle hook, $componentController has nothing to do with it
  }))

  it('should have a name', () => {
    expect(ctrl.name).toBe('{Name}');
  });
});
