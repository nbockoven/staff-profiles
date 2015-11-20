staff.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/profile");

  // Now set up the states
  $stateProvider

  .state('lost', {
    url: "/lost",
    templateUrl: "app/components/lost/view.html",
    data: {
      pagetitle: 'Page Not Found'
    }
  })

  .state('contact', {
    abstract: true,
    url: "/contact",
    templateUrl: "app/components/contact/view.listing.html",
    data: {
      // pagetitle: 'Contacts',
      // requireLogin: true
    }
  })

  .state('contact.detail', {
    url: "/{contactID:int}",
    data: {
      pagetitle: 'Contact'
    },
    resolve: {
      contactInfo: ['$stateParams', 'contactService', function( $stateParams, contactService ){
        return contactService.getByID( $stateParams.contactID );
      }]
    },
    templateUrl: "app/components/contact/view.detail.html",
    controller: 'contact'
  })

  .state('contact.preview', {
    templateUrl: "app/components/contact/view.preview.html"
  })

  .state('dashboard', {
    url: "/dashboard",
    controller: 'dashboard',
    templateUrl: "app/components/dashboard/view.html",
    data: {
      pagetitle: 'Dashboard',
      // requireLogin: true
    }
  })

  .state('sign-in', {
    url: "/sign-in",
    controller: 'signIn',
    templateUrl: "app/components/sign-in/view.html",
    data: {
      pagetitle: 'Sign In'
    }
  })

  .state('sign-out', {
    url: "/sign-out",
    controller: 'signOut',
    templateUrl: "app/components/sign-out/view.html",
    data: {
      pagetitle: 'Sign Out',
      // requireLogin: true
    }
  })

  .state('modal', {
    abstract: true,
    views: {
      'modal': {
        templateUrl: 'app/shared/modals/common.html'
      }
    }
  })

  .state('search', {
    url: "/search",
    controller: 'search',
    templateUrl: "app/components/search/view.html",
    data: {
      pagetitle: 'Search',
      // requireLogin: true
    },
    resolve: {
      bids: ['searchService', function( searchService ){
        return searchService.getBids( {} );
      }],
      // orgs: ['searchService', function( searchService ){
      //   return searchService.getOrgs( {} );
      // }]
    }
  })

  .state('settings', {
    url: "/settings",
    controller: 'settings',
    templateUrl: "app/components/settings/view.php",
    data: {
      pagetitle: 'Settings',
      // requireLogin: true
    }
  })

  .state('support', {
    url: "/support",
    templateUrl: "app/components/support/view.php",
    data: {
      pagetitle: 'Support',
      // requireLogin: true
    }
  })

  // .state('welcome', {
  //   url: "/",
  //   controller: "welcome",
  //   templateUrl: "app/components/welcome/view.html",
  //   data: {
  //     pagetitle: 'Welcome'
  //   }
  // })

  .state('profile', {
    url: "/profile",
    controller: "profile",
    templateUrl: "app/components/profile/view.html",
    data: {
      pagetitle: 'Profile'
    }
  })

  ;
});
