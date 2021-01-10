const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let array = Object.values(collection)
      for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
      }
      return collection
    },

    map: function(collection, callback) {
      let array = Object.values(collection)
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let array = Object.values(collection)
      for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
      }
      return collection
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
