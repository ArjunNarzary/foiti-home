import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {
    isAndroid,
    isIOS,
    isMobile
} from "react-device-detect";
import { getUser } from '../redux/customApi/api';

const User = ({ user }) => {
    const router = useRouter();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("profile_picture.jpg")

    useEffect(() => {
        if (isMobile && isAndroid) {
            const link = document.createElement('a');
            link.href = `http://play.google.com/store/apps/details?id=com.foiti.android`;
            link.click();
        } else {
            router.push("/")
        }
    }, []);

    useEffect(() => {
        let totalContri = user?.user?.total_contribution + (user?.user?.total_contribution > 1 ? " Contributions" : " Contribution");
        let visited = "Visited " + user?.placesVisited + (user?.placesVisited > 1 ? " Places" : " Place");
        let des = `${totalContri} • ${visited}`
        setDescription(des);

        if (user?.user?.profileImage?.thumbnail?.private_id){
            setImage(user?.user?.profileImage?.thumbnail?.private_id);
        }
    }, [user]);


    return (
        <div>
            <Head>
                <title>Foiti</title>
                <link rel="icon" href="/images/favicon.png" />
                <meta
                    name="description"
                    content={`${description}`}
                />
                <meta property="og:title" content={`${user?.user?.name}`} />
                <meta
                    property="og:description"
                    content={`${description}`}
                />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/image/${image}`} />
                <meta property="og:site_name" content="IMDb" />
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

export default User

export async function getServerSideProps(context) {
    const user_id = context.params.user_id;
    const res = await getUser(user_id)

    let user = {};
    if (res.status === 200) {
        user = res.data
    }

    return { props: { user } }
}