const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const getAllData = async () => {
  try {
    const client = await pool.connect();
    const infoResult = await client.query("SELECT * FROM my_info LIMIT 1");
    const socialLinksResult = await client.query("SELECT * FROM social_links");
    const skillsResult = await client.query("SELECT * FROM frontend_skills");
    const aboutMeResult = await client.query("SELECT * FROM about_me");
    client.release();

    const data = {
      info:
        infoResult.rows.length > 0
          ? {
              name: infoResult.rows[0].name,
              position: infoResult.rows[0].position,
              summary: infoResult.rows[0].summary,
              resumeLink: infoResult.rows[0].resume_link,
              avatar: {
                src: infoResult.rows[0].avatar_src,
                alt: infoResult.rows[0].avatar_alt,
              },
            }
          : null,
      aboutMe:
        aboutMeResult.rows.length > 0
          ? {
              title: aboutMeResult.rows[0].title,
              description: aboutMeResult.rows[0].description,
              image: {
                src: aboutMeResult.rows[0].image_url,
                alt: aboutMeResult.rows[0].image_alt,
              },
            }
          : null,
      socialLinks: socialLinksResult.rows.reduce((acc, link) => {
        acc[link.platform] = {
          url: link.url,
          label: link.label,
          title: link.title,
          icon: link.icon,
        };
        return acc;
      }, {}),
      frontend: skillsResult.rows.reduce((acc, skill) => {
        acc[skill.skill] = skill.proficiency;
        return acc;
      }, {}),
    };
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.stack);
    console.error("Error details:", error);
    throw error;
  }
};

module.exports = { getAllData };
