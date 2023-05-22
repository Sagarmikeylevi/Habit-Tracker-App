import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./CategoryList.module.css";

const CategoryList = () => {
  const navigate = useNavigate();

  const categoryHandler = (url) => {
    navigate(`/create/task-form/${encodeURIComponent(url)}`);
  };

  return (
    <Card className={classes.wrapper}>
      <header>
        <img
          src="https://cdn-icons-png.flaticon.com/128/7794/7794196.png"
          alt="select items"
        />
        <p>Select a category for your habit</p>
      </header>
      <div className={classes.categorys}>
        <ul>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/2169/2169957.png"
              )
            }
          >
            <p>Stop habit</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2169/2169957.png"
                alt="bad habit"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/8086/8086179.png"
              )
            }
          >
            <p>Meditation</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/8086/8086179.png"
                alt="meditation"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/983/983534.png"
              )
            }
          >
            <p>Sports</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/983/983534.png"
                alt="sports"
              />
            </div>
          </li>
          {/* Add the same onClick handler to the remaining <li> elements */}
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/4187/4187213.png"
              )
            }
          >
            <p>Social</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4187/4187213.png"
                alt="social"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/3004/3004458.png"
              )
            }
          >
            <p>Health</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3004/3004458.png"
                alt="health"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/561/561611.png"
              )
            }
          >
            <p>Nutrition</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                alt="nutrition"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/3867/3867942.png"
              )
            }
          >
            <p>Outdoor</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3867/3867942.png"
                alt="outdoor"
              />
            </div>
          </li>
        </ul>

        <ul>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/5361/5361551.png"
              )
            }
          >
            <p>Art</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5361/5361551.png"
                alt="art"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/801/801081.png"
              )
            }
          >
            <p>Study</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/801/801081.png"
                alt="study"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/3163/3163508.png"
              )
            }
          >
            <p>Entertainment</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3163/3163508.png"
                alt="entertainment"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/3135/3135706.png"
              )
            }
          >
            <p>Finance</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135706.png"
                alt="finance"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/4727/4727424.png"
              )
            }
          >
            <p>Work</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4727/4727424.png"
                alt="work"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/1946/1946433.png"
              )
            }
          >
            <p>Home</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1946/1946433.png"
                alt="home"
              />
            </div>
          </li>
          <li
            onClick={() =>
              categoryHandler(
                "https://cdn-icons-png.flaticon.com/128/7245/7245102.png"
              )
            }
          >
            <p>Other</p>
            <div className={classes.imageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/7245/7245102.png"
                alt="other"
              />
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default CategoryList;
