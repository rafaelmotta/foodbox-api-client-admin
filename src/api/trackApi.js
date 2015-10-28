let service = (Restangular, ApiBase) => {

  return new class TrackApi extends ApiBase {
    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('tracks')
        .get();
    }

    update(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('tracks', data.id)
        .patch({ track: data });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('trackApi', service);