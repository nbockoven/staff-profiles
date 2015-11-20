var staff = angular.module('staff', ['ui.router', 'ngSanitize']);

staff.run(['$rootScope', '$state', '$stateParams', function( $rootScope, $state, $stateParams ){

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if( requireLogin && typeof $rootScope.currentUser === 'undefined' ){
      // login required
      // forward to login page
      event.preventDefault();
      $state.previousState = toState.name;
      $state.go("login");
    }
    else if( $state.previousState && $state.previousState.length ){
      // previous tried to view a page with login required,
      // and was redirected to sign in
      $state.go( $state.previousState );
      delete $state.previousState;
    }
  });

  $rootScope.$on('$stateNotFound', function (event, toState, toParams) {
    event.preventDefault();
    $state.go("lost");
  });

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}]);
