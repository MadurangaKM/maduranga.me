export default{
    name:'logoDesign',
    title:'LogoDesign',
    type: 'document',
    fields:[
        {
            name:'page',
            title:'Page',
            type:'number'
        },
        {
            name:'image',
            title:'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'width',
            title:'width',
            type:'number'
        },
         {
            name:'height',
            title:'height',
            type:'number'
        },
        
    ]
}