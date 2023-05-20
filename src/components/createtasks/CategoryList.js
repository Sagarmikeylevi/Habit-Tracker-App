import Card from '../UI/Card';
import classes from './CategoryList.module.css';

const CategoryList = () => {
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
            <li>
              <p>Stop habit</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2169/2169957.png"
                  alt="bad habit"
                />
              </div>
            </li>
            <li>
              <p>Meditation</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8086/8086179.png"
                  alt="meditaion"
                />
              </div>
            </li>
            <li>
              <p>Sports</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/983/983534.png"
                  alt="sports"
                />
              </div>
            </li>
            <li>
              <p>Social</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4187/4187213.png"
                  alt="social"
                />
              </div>
            </li>
            <li>
              <p>Health</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3004/3004458.png"
                  alt="health"
                />
              </div>
            </li>
            <li>
              <p>Nutrition</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                  alt="nutrition"
                />
              </div>
            </li>
            <li>
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
            <li>
              <p>Art</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5361/5361551.png"
                  alt="art"
                />
              </div>
            </li>
            <li>
              <p>Study</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/801/801081.png"
                  alt="study"
                />
              </div>
            </li>
            <li>
              <p>Entertainment</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3163/3163508.png"
                  alt="entertainment"
                />
              </div>
            </li>
            <li>
              <p>Finance</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135706.png"
                  alt="finance"
                />
              </div>
            </li>
            <li>
              <p>Work</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4727/4727424.png"
                  alt="work"
                />
              </div>
            </li>
            <li>
              <p>Home</p>
              <div className={classes.imageContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1946/1946433.png"
                  alt="home"
                />
              </div>
            </li>
            <li>
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
}

export default CategoryList;