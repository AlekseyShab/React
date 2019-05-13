import React from "react";
import myPosts from './myPosts.module.css';
import ProfileInfo from "./PostItem/profileInfo";

const MyPosts = () => {
    let postsData =[
        {id:1, name:'Alexandra', message:'Hi,how are you?',ava:'https://lastfm-img2.akamaized.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg' },
        {id:2, name:'Vasya', message:'Hi!',ava:'https://scstylecaster.files.wordpress.com/2015/10/model-with-glowing-skin.jpg?w=916&h=1374' },
        {id:3, name:'Petr', message:'Hello!',ava:'https://i.kinja-img.com/gawker-media/image/upload/s--oFm5GcfO--/c_scale,f_auto,fl_progressive,q_80,w_800/d4tapmk7e7p9gf2fch3a.png' },
        {id:4, name:'Katya', message:'Foo',ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kcUffWal2SdGPSg2hcW4i5ar_wF7rNJYlkcZ_OLjf6sn0jiY' },
        {id:5, name:'Nina', message:'Die',ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPu2QnR8pUsg208g_UaYwPVovYReg7KG7evNiyc3enJNg3BMPA' },
        {id:6, name:'Ostap', message:'Omg',ava:'https://hips.hearstapps.com/prod-rover-media-hearst-io.s3.amazonaws.com/profile_photos/c2975921-35c2-4308-b104-591b4ea79c35.jpg?fill=1:1&resize=200:*' },
        {id:7, name:'Igor', message:'Ups',ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3JjU_uyU7tKHososvx66E8jd6SkJZV_7EjTQxi-hIWrK08THrw' },
    ];

    let postsElement = postsData.map( el => <ProfileInfo message = {el.message} link={el.ava} name={el.name}/> );
        return (
            <div className={myPosts.posts}>
                { postsElement }
            </div>

        );
}

export default MyPosts;