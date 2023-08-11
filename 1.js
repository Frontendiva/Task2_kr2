function getQuntityPostsByAuthor(listOfPosts1, authorName) {
    let postCount = 0;
    let commentCount = 0;

    for( const post of listOfPosts1){
        if(post.author === authorName){
            postCount ++;
        }

        if(post.comments){
            for(const comment of post.comments){
                if(comment.author === authorName){
                    commentCount ++;
                }
            }
        }
    }
    return `post - ${postCount}, comments - ${commentCount}`;
}

const listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Petrov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'

    }

];
console.log(getQuntityPostsByAuthor(listOfPosts2, 'Rimus'))

//Функция 2

let cacheStorage = [];

function cache(func) {
    return function (...args) {
      const key = JSON.stringify(args);

      
      const cachedResult = cacheStorage.find((item) => item.key === key);

    if (cachedResult) {
      console.log("Cache hit!");
      return cachedResult.result;
    } else {
      console.log("Cache miss!");
      const result = func(...args);
     
      cacheStorage.push({ key: key, result: result });
      return result;
    }
  };
}

let complexFunction = function (arg1, arg2) {
    return arg1 + arg2; 
  };
  
  let cachedFunc = cache(complexFunction);
  
  console.log(cachedFunc("foo", "bar")); 
  console.log(cachedFunc("foo", "bar")); 
  console.log(cachedFunc("foo", "baz"));