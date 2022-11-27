import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {
    isAndroid,
    isIOS,
    isMobile
} from "react-device-detect";
import { getPlace } from '../../redux/customApi/api';

const Place = ({ place }) => {
    const router = useRouter();
    const [description, setDescription] = useState("");

    useEffect(() => {
        let desText = "";
        if(place?.place?.types.length > 1){
            let typeArr = place?.place?.types[1].split("_").map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
            desText = `${typeArr} • ${place?.place?.short_address}`; 
        }else{
            desText = `${place?.place?.short_address}`
        }

        setDescription(desText);
    },[place])

    useEffect(() => {
        if (isMobile && isAndroid) {
            const link = document.createElement('a');
            link.href = `http://play.google.com/store/apps/details?id=com.foiti.android`;
            link.click();
        } else {
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
                    content={`${description}`}
                />
                <meta property="og:title" content={`${place?.place?.display_name || place?.place?.name}`} />
                <meta
                    property="og:description"
                    content={`${description}`}
                />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/image/${place?.place?.cover_photo?.thumbnail?.private_id}`} />
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

export default Place

export async function getServerSideProps(context) {
    const place_id = context.params.place_id;
    const res = await getPlace(place_id)

    let place = {};
    if (res.status === 200) {
        place = res.data
    }

    return { props: { place } }
}