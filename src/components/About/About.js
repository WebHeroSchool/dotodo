import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./About.module.css";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    error: "",
    repoList: [],
    info: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: "tytytyw"
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      });
    })
    .catch( (error) => {
      this.setState({
        isLoading: false,
        isError: true,
        error: error.message
      });
    });

   octokit.users.getByUsername({
      username: "tytytyw"
        }).then(({ data }) => {
          this.setState({
            info: data,
        });
    })
    .catch( (error) => {
      this.setState({
        bioIsLoading: false,
        isError: true,
        error: error.message
      });
    });
  }

  render() {
    const { isLoading, isError, error, repoList, info } = this.state;
    return (
      isLoading ? <CircularProgress /> :
        <div className={styles.wrap}>

          {!isLoading && !isError &&
            <div className={styles.bio}>
              <img src={info.avatar_url} alt="avatar GitHub"></img>
              <h4 className={styles.content}>
                <div>
                  name: {info.name}
                </div>
                <a className={styles.link} href={info.html_url}>
                    GitHub: {info.login}
                </a>
              </h4>
            </div>
          }

          {!isLoading && !isError &&
            <div className={styles.title}>
              Мои репозитрии:
              <ol className={styles.repo_list}>
                {repoList.map( (repo) => (
                <li 
                  key={repo.id}
                  className={styles.item}
                >
                  <a
                  className={styles.link}
                  href={repo.html_url}
                  >
                    {repo.name}
                    <span className={styles.update}>
                      {new Date(repo.updated_at).toLocaleString('ru',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })
                      }
                    </span>
                    
                  
                  </a>
                  <a 
                    href={`https://${info.login}.github.io/${repo.name}/`}
                    className={styles.gitpages}
                  >
                  </a>
                </li>))}
              </ol>
            </div>
          }

          {isError &&
            <div className={styles.error}>
              Ошибка: {error}
            </div>
          }

      </div>
    );
  }
}

export default About;
