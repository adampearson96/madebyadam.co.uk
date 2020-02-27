import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
		graphql`
			query site_meta_data {
				site {
					siteMetadata {
						title
						description
						image
					}
				}
			}		
		`
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
