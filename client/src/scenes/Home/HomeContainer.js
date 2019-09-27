import React from 'react';

const HomeContainer = () => {
  return (
    <div>
      <header id="header">
        <div className="logo">
          <a href="" className="hidden-xs">
            Material
            <small>admin extended dark</small>
          </a>
          <i
            className="logo__trigger zmdi zmdi-menu"
            data-mae-action="block-open"
            data-mae-target="#navigation"
          />
        </div>

        <ul className="top-menu">
          <li className="top-menu__trigger hidden-lg hidden-md">
            <a href="">
              <i className="zmdi zmdi-search" />
            </a>
          </li>

          <li className="top-menu__apps dropdown hidden-xs hidden-sm">
            <a data-toggle="dropdown" href="" aria-expanded="false">
              <i className="zmdi zmdi-apps" />
            </a>
            <ul className="dropdown-menu pull-right">
              <li>
                <a href="">
                  <i className="zmdi zmdi-calendar" />
                  <small>Calendar</small>
                </a>
              </li>

              <li>
                <a href="">
                  <i className="zmdi zmdi-file-text" />
                  <small>Files</small>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-email" />
                  <small>Mail</small>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-trending-up" />
                  <small>Analytics</small>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-view-headline" />
                  <small>News</small>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-image" />
                  <small>Gallery</small>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown hidden-xs">
            <a data-toggle="dropdown" href="" aria-expanded="false">
              <i className="zmdi zmdi-more-vert" />
            </a>
            <ul className="dropdown-menu dropdown-menu--icon pull-right">
              <li className="hidden-xs">
                <a data-mae-action="fullscreen" href="">
                  <i className="zmdi zmdi-fullscreen" /> Toggle Fullscreen
                </a>
              </li>
              <li>
                <a data-mae-action="clear-localstorage" href="">
                  <i className="zmdi zmdi-delete" /> Clear Local Storage
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-face" />
                  Privacy Settings
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-settings" /> Other Settings
                </a>
              </li>
            </ul>
          </li>
          <li
            className="top-menu__alerts"
            data-mae-action="block-open"
            data-mae-target="#notifications"
            data-toggle="tab"
            data-target="#notifications__messages"
          >
            <a href="">
              <i className="zmdi zmdi-notifications" />
            </a>
          </li>
          <li className="top-menu__profile dropdown">
            <a data-toggle="dropdown" href="" aria-expanded="false">
              <img
                src="https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/11665522_455638644595970_6938127578376691444_n.jpg?_nc_cat=101&_nc_oc=AQmK7T7o4EMf3qA74dhKlJRvxIZthLXNppl_lO86r5RpeI7M7pjPW1vzIMZjuc7QYyc&_nc_ht=scontent.flwo1-1.fna&oh=2ce5686c3719181c1e31b17cff4b80bd&oe=5E03C21E"
                alt=""
              />
            </a>

            <ul className="dropdown-menu pull-right dropdown-menu--icon">
              <li>
                <a href="profile-about.html">
                  <i className="zmdi zmdi-account" /> View Profile
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-input-antenna" /> Privacy Settings
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-settings"></i> Settings
                </a>
              </li>
              <li>
                <a href="">
                  <i className="zmdi zmdi-time-restore"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <form className="top-search">
          <input
            type="text"
            className="top-search__input"
            placeholder="Search for people, files &amp; reports"
          />
          <i className="zmdi zmdi-search top-search__reset"></i>
        </form>
      </header>
      <section id="main">
        <aside id="navigation">
          <div className="navigation__menu c-overflow">
            <ul>
              <li className="navigation__active">
                <a href="index.html">
                  <i className="zmdi zmdi-home"></i> Home
                </a>
              </li>
              <li>
                <a href="typography.html">
                  <i className="zmdi zmdi-format-underlined"></i> Typography
                </a>
              </li>
              <li>
                <a href="widgets.html">
                  <i className="zmdi zmdi-widgets"></i> Widgets
                </a>
              </li>
              <li className="navigation__sub">
                <a href="" data-mae-action="submenu-toggle">
                  <i className="zmdi zmdi-view-list"></i> Tables
                </a>

                <ul>
                  <li>
                    <a href="tables.html">Normal Tables</a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Tables</a>
                  </li>
                </ul>
              </li>
              <li className="navigation__sub">
                <a href="" data-mae-action="submenu-toggle">
                  <i className="zmdi zmdi-collection-text"></i> Forms
                </a>
                <ul>
                  <li>
                    <a href="form-elements.html">Basic Form Elements</a>
                  </li>
                  <li>
                    <a href="form-components.html">Form Components</a>
                  </li>
                  <li>
                    <a href="form-examples.html">Form Examples</a>
                  </li>
                  <li>
                    <a href="form-validations.html">Form Validation</a>
                  </li>
                </ul>
              </li>
              <li className="navigation__sub">
                <a href="" data-mae-action="submenu-toggle">
                  <i className="zmdi zmdi-swap-alt"></i>User Interface
                </a>
                <ul>
                  <li>
                    <a href="animations.html">Animations</a>
                  </li>
                  <li>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="icons.html">Icons</a>
                  </li>
                  <li>
                    <a href="alerts.html">Alerts</a>
                  </li>
                  <li>
                    <a href="preloaders.html">Preloaders</a>
                  </li>
                  <li>
                    <a href="notification-dialog.html">
                      Notifications &amp; Dialogs
                    </a>
                  </li>
                  <li>
                    <a href="media.html">Media</a>
                  </li>
                  <li>
                    <a href="components.html">Components</a>
                  </li>
                </ul>
              </li>
              <li className="navigation__sub">
                <a href="" data-mae-action="submenu-toggle">
                  <i className="zmdi zmdi-trending-up"></i>Charts
                </a>
                <ul>
                  <li>
                    <a href="flot-charts.html">Flot Chart</a>
                  </li>
                  <li>
                    <a href="other-charts.html">Others</a>
                  </li>
                </ul>
              </li>
              <li className="navigation__sub">
                <a href="" data-mae-action="submenu-toggle">
                  <i className="zmdi zmdi-image"></i>Photo Gallery
                </a>
                <ul>
                  <li>
                    <a href="photos.html">Default</a>
                  </li>
                  <li>
                    <a href="photo-timeline.html">Timeline</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="calendar.html">
                  <i className="zmdi zmdi-calendar"></i> Calendar
                </a>
              </li>
              <li>
                <a href="generic-classes.html">
                  <i className="zmdi zmdi-layers"></i> Generic Classes
                </a>
              </li>
              <li className="navigation__sub">
                <a href="" data-mae-action="submenu-toggle">
                  <i className="zmdi zmdi-collection-item"></i> Sample Pages
                </a>
                <ul>
                  <li>
                    <a href="profile-timeline.html">Profile</a>
                  </li>
                  <li>
                    <a href="list-view.html">List View</a>
                  </li>
                  <li>
                    <a href="messages.html">Messages</a>
                  </li>
                  <li>
                    <a href="pricing-table.html">Pricing Table</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="wall.html">Wall</a>
                  </li>
                  <li>
                    <a href="invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="login.html">Login and Sign Up</a>
                  </li>
                  <li>
                    <a href="lockscreen.html">Lockscreen</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>

        <section id="content">
          <div className="content__header">
            <h2>Typography</h2>
          </div>

          <div className="card">
            <div className="card__header">
              <h2>Body Copy</h2>
            </div>

            <div className="card__body">
              <p className="lead">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus.
              </p>
              <p>
                Pellentesque lacinia sagittis libero et feugiat. Etiam volutpat
                adipiscing tortor non luctus. Vivamus venenatis vitae metus et
                aliquet. Praesent vitae justo purus. In hendrerit lorem nisl, ac
                lacinia urna aliquet non. Quisque nisi tellus, rhoncus quis est
                sit amet, lacinia euismod nunc. Aenean nec nibh velit. Fusce
                quis ante in nisl molestie fringilla. Nunc vitae ante id magna
                feugiat condimentum. Maecenas sit amet urna massa.
              </p>
              <p>
                Integer eu lectus sollicitudin, hendrerit est ac, sollicitudin
                nisl. Quisque viverra sodales lectus nec ultrices. Fusce elit
                dolor, dignissim a nunc id, varius suscipit turpis. Cras
                porttitor turpis vitae leo accumsan molestie. Morbi vitae luctus
                leo. Sed nec scelerisque magna, et adipiscing est. Proin
                lobortis lectus eu sem ullamcorper, commodo malesuada quam
                fringilla. Curabitur ac nunc dui. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Fusce sagittis enim eu est lacinia, ut egestas ligula imperdiet.
              </p>
            </div>
          </div>
        </section>

        <footer id="footer">
          Сopyright
          <ul className="footer__menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Reports</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
};

HomeContainer.propTypes = {};

export default HomeContainer;
