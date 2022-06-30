module.exports=function(item){
    console.log('hello');

    return item.replace('console.log(','alert(')
}