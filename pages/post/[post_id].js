import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import {
    isAndroid,
    isIOS,
    isMobile
} from "react-device-detect";
import { getPost } from '../../redux/customApi/api';

const Post = ({ post }) => {
    const router = useRouter();

    useEffect(() => {
        if(isMobile && isAndroid){
            const link = document.createElement('a');
            link.href = `http://play.google.com/store/apps/details?id=com.foiti.android`;
            link.click();
        }else{
            router.push("/")
        }
    }, []);


  return (
      <div>
          <Head>
              <title>Foiti</title>
              <link rel="icon" href="/images/favicon.png" />
              <meta
                  name="description"
                  content={`${post?.post?.caption}`}
              />
              <meta property="og:title" content={`${post?.post?.user?.name}'s post on Foiti`} />
              <meta
                  property="og:description"
                  content={`${post?.post?.caption}`}
              />
              <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/image/${post?.post?.content[0]?.image?.thumbnail?.private_id}`} />
              <meta property="og:site_name" content="Foiti" />
          </Head>
          <main>
            <div>
                  <div className="text-center">
                      <a href="intent://#Intent;scheme=foiti;package=com.foiti.android;end">
                          <Image
                              className="cursor-pointer"
                              src="/images/play-store-logo.png"
                              height={70}
                              width={200}
                              objectFit="contain"
                              alt="Get foiti app on google play"
                          />
                      </a>
                  </div>
            </div>
          </main>
      </div>
  )
}

export default Post

export async function getServerSideProps(context){
    const post_id = context.params.post_id;
    const res = await getPost(post_id)

    let post = {};
    if(res.status === 200){
        post = res.data
    }

    return { props: { post } }
}