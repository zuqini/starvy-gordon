var Api = {
    getRestaurants: function(lat, long) {
        return fetch('http://crunchbits.herokuapp.com/yelp/search?latitude=' + lat + '&longitude=' + long)
            .then(response => response.json())
            .catch(e => e)
    },
};
export { Api as default };