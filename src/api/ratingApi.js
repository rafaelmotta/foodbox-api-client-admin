let service = (Restangular, ApiBase) => {

  return new class RatingApi extends ApiBase {

    fetch(params) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('ratings')
        .get(params);
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('foodbox.admin.api').factory('ratingApi', service);