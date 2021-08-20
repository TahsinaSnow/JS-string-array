const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight p]Phone',
    'Dell yello laptop with black camera',
    '1X59 Lenevo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'purple color phone with laptop'
];

const searching = 'Dell';
//indexOf

const output = [];

for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase) != -1){
        //output.push(product);
    }
}
//console.log(output) or


for(const product of products){
    if(product.toLowerCase() .includes(searching.toLowerCase() )) {
        //output.push(product);

    }
};

//start with

for(const product of products){
    if(product.toLowerCase() .startsWith(searching.toLowerCase() )){
  
        output.push(product);
    }
}