

interface Variants {
    [variant: string]: Variant;
}


interface Variant {
    image_with_color:string,
    offer_price1:number,
    actual_price:number,
    offer:number,
    rating:number,
    reviews:number,
    size:string[],
    images:string[],
    stock:number,
}

interface Offer{
    bankoffer: string[]
    emioption:string[]
}

interface Product {
    id: number;
    location: string;
    brand: string;
    product: string;
    product_description: string;
    variants: Variants;
    offers: Offer;
}
const Data:Product[]=[
    {
        id:1,
        location:'Online shop Activewear Limited,Mumbai,Maharashtra.',
        brand:'Allen Solly',
        product:'Regular Fit T-Shirt',
        product_description:'Enjoy comfort and style in Allen Solly\'s Regular Fit Tee. Crafted for everyday wear with quality materials, it effortlessely blends style and comfort',
        
        variants:{
            green:{
                image_with_color:'/assets/5.png',
                offer_price1:649,
                actual_price:1999,
                offer:67,
                rating:4.5,
                reviews:58,
                size:['XS','S','M','L','XL','XXL'],
                images:['/assets/1.png','/assets/2.png','/assets/3.png','/assets/4.png'],
                stock:12,
                

            },
            blue:{
                image_with_color:'/assets/6.png',
                offer_price1:649,
                actual_price:1999,
                offer:67,
                rating:4.5,
                reviews:58,
                size:['XS','S','M','L','XL','XXL'],
                images:['/assets/1.png','/assets/2.png','/assets/3.png','/assets/4.png'],
                stock:10
            },
            white:{
                image_with_color:'/assets/7.png',
                offer_price1:649,
                actual_price:1999,
                offer:67,
                rating:4.5,
                reviews:58,
                size:['XS','S','M','L','XL','XXL'],
                images:['/assets/1.png','/assets/2.png','/assets/3.png','/assets/4.png'],
                stock:10
            },
            black:{
                image_with_color:'/assets/8.png',
                offer_price1:649,
                actual_price:1999,
                offer:67,
                rating:4.5,
                reviews:58,
                size:['XS','S','M','L','XL','XXL'],
                images:['/assets/1.png','/assets/2.png','/assets/3.png','/assets/4.png'],
                stock:10
            },
            violet:{
                image_with_color:'/asset/9.png',
                offer_price1:649,
                actual_price:1999,
                offer:67,
                rating:4.5,
                reviews:58,
                size:['XS','S','M','L','XL','XXL'],
                images:['/assets/1.png','/assets/2.png','/assets/3.png','/assets/4.png'],
                stock:10
            }

        },

        offers:{

         bankoffer:  ['10% Instant Discount on ICICI Bank Credit Cards and NetBanking','5% Cashback on Online shopping Axis Bank Card','12% Instant Discount on HDFC Bank Debit Card EMI','Extra 750 off on OneCard Credit Card EMI Transactions on products priced 50,000 and above' ],
         emioption:['EMI starting from Rs.19/month']
        

        },
       
        
    }
]