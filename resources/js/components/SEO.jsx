import { Helmet} from 'react-helmet';

export const SEO = ({ title, description, keywords }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Helmet>
        </>
    );
}