import Head from "next/head";
import Link from "next/link";
import React from "react";

const CommunityGuidelines = () => {
  return (
    <div className="px-1">
      <Head>
        <title>Foiti - Community Guidelines</title>
        <meta
          name="description"
          content="Foiti's Terms of Use contains all the rules governing your access of all Foiti services."
        />
        <meta property="og:title" content="Foiti - Community Guidelines" />
        <meta
          property="og:description"
          content="Foiti's Terms of Use contains all the rules governing your access of all Foiti services."
        />
        <meta
          property="og:url"
          content="https://foiti.com/community-guidelines"
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main>
        <div className="py-12 px-6">
          <h1 className="font-bold mt-5 mb-10 text-2xl">
            Community Guidelines
          </h1>
          <p>
            At Foiti, we contribute to human progress by empowering to change
            the way we travel, explore the world, and have fun together. We
            created these Community Guidelines to support our mission and
            protect this amazing community
          </p>
          <br></br>
          <p>
            By using Foiti, you agree to these guidelines and our{" "}
            <Link href="/tou">
              <a className="text-blue-600">Terms of Use</a>
            </Link>
            . We&apos;re committed to these guidelines and we hope you are too.
            Overstepping these boundaries may result in deleted content,
            disabled accounts or other restrictions.
          </p>
          <h1 className="font-bold mt-10 mb-4">Original Content</h1>
          <ul>
            <li>
              Share only photos that you&apos;ve taken or have the authority to
              share. Remember to post authentic content, and don&apos;t post
              anything you&apos;ve copied or collected from the Internet that
              you don&apos;t have the right to post.
            </li>
            <li>
              Don&apos;t infringe someone else&apos;s copyright which can be
              logo, photo, art, text etc.
            </li>
          </ul>
          <br></br>
          <h1 className="font-bold mt-10 mb-4">Sexually Explicit Content</h1>
          <ul>
            <li>
              We prohibit accounts that promote or distribute pornographic
              content.
            </li>
            <li>
              We report all instances of child sexual exploitation to
              authorities. Never post, save, or send nude or sexually explicit
              content involving anyone under the age of 18 — even of yourself.
              Never ask a minor to send sexually explicit content.
            </li>
          </ul>
          <br></br>
          <h1 className="font-bold mt-10 mb-4">Harassment & Bullying</h1>
          <ul>
            <li>
              We prohibit bullying or harassment of any kind. If someone blocks
              you, you may not contact them from another account.
            </li>
            <li>
              Sharing another person&apos;s private information, co-ordinates or
              photos of people in private spaces without their knowledge and
              consent is not allowed.
            </li>
            <li>
              If someone is depicted in your content and asks you to remove it,
              please do! Respect the privacy rights of others.
            </li>
          </ul>
          <br></br>
          <h1 className="font-bold mt-10 mb-4">Threats, Violence & Harm</h1>
          <ul>
            <li>
              Encouraging violence or dangerous behaviour is prohibited — never
              intimidate or threaten to harm a person, a group of people, or
              someone’s property.
            </li>
            <li>
              Contents of gratuitous or graphic violence, including animal abuse
              are not allowed.
            </li>
            <li>
              We don’t allow the glorification of self-harm, including the
              promotion of self-injury, suicide or eating disorders
            </li>
          </ul>
          <h1 className="font-bold mt-10 mb-4">
            Impersonation, Deceptive Practices & False Information
          </h1>
          <ul>
            <li>
              We prohibit pretending to be someone (or something) that you’re
              not, or attempting to deceive people about who you are. This
              includes impersonating your friends, celebrities, brands, or other
              organizations.
            </li>
            <li>
              We prohibit spreading false information that causes harm or is
              malicious, such as manipulating content for false or misleading
              purposes.
            </li>
            <li>
              We disallow spam and deceptive practices, including imitating
              Foiti.
            </li>
          </ul>
          <h1 className="font-bold mt-10 mb-4">Illegal Activity</h1>
          <ul>
            <li>
              Don’t use Foiti for any illegal activity — including to promote
              criminal activity; facilitate or participate in cybercrime; or to
              buy, sell or facilitate sales of illegal or regulated drugs,
              contraband, weapons, and counterfeit goods or documents.
            </li>
            <li>
              We prohibit the promotion of regulated goods or industries,
              including illegal gambling, tobacco products, and alcohol.
            </li>
          </ul>
          <h1 className="font-bold mt-10 mb-4">
            Terrorism, Hate Groups, and Hate Speech
          </h1>
          <ul>
            <li>
              Terrorist, extremist and hate groups are prohibited from using our
              platform. We have no tolerance for content that advocates or
              advances violent extremism or terrorism.
            </li>
            <li>
              Hate speech or content that demeans, defames, or promotes
              discrimination or violence on the basis of race, colour, caste,
              ethnicity, national origin, religion, sexual orientation, gender
              identity, disability, or veteran status, immigration status,
              socio-economic status, age, weight or pregnancy status is
              prohibited.
            </li>
          </ul>
          <br></br>
          <p>
            Please remember that you can always file a report with our Trust &
            Safety team using our in-app reporting feature. We review these
            reports to determine violations of these Guidelines.
          </p>
          <br></br>
          <p>
            If you violate these Community Guidelines, we may remove the
            offending content, terminate or limit the visibility of your
            account, and/or notify law enforcement. We engage with global law
            enforcement when activity poses a threat to human life. If your
            account is terminated for violating our Terms of Service or these
            Guidelines, you are not allowed to use Foiti again.{" "}
          </p>
          <br></br>
          <p>
            Foiti reserves the right to remove users whom we have reason to
            believe, in our sole discretion, pose a clear and present danger to
            others, on or off of Foiti. These include leaders of hate groups and
            terrorist organizations, and individuals with a reputation for
            inciting violence or behaviour that we believe poses a threat to
            human life.
          </p>
          <br></br>
          <p>
            Please take these Guidelines seriously and honour them in the spirit
            in which they are intended.
          </p>
          <br></br>
          <br></br>
        </div>
      </main>
    </div>
  );
};

export default CommunityGuidelines;
