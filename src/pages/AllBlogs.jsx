/* eslint-disable no-unused-vars */
import React from 'react'
import book from '../assets/book.jpeg'



const BlogsDes = () => {

  
  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-black antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          {/* Image on top for mobile view */}
          <figure className="mb-8 lg:hidden text-center">
            <img src={book} alt="" className="w-full h-auto rounded-lg shadow-lg shadow-black/20" />
            <figcaption></figcaption>
          </figure>

          <div  className="flex flex-col-reverse lg:flex-row justify-between">
            {/* Content on the bottom for mobile view */}
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-white">
                    <img className="mr-4 w-16 h-16 rounded-full" src="https://avatars.githubusercontent.com/u/110277485?v=4" alt="Jese Leos" />
                    <div>
                      <a
                       className="text-xl font-bold text-white">Soumargha Bhattacharjee</a>
                      <p className="text-base text-gray-400">Full stack developer</p>
                      <p className="text-base text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </address>
                <h1 id="blog1" className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                  Best practices for successful prototypes
                </h1>
              </header>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui error commodi architecto! Eum earum
                iste facilis obcaecati hic neque corporis, accusamus sequi vitae odit ducimus magnam veritatis harum ab
                magni ut, nobis temporibus sit nesciunt! Odio perferendis soluta atque a sequi corrupti necessitatibus
                non nobis vitae! Saepe omnis quos eaque illum! Eum, laborum modi. Voluptas, quos eaque? Hic quis
                consequatur excepturi reprehenderit nulla, illo atque voluptate impedit laudantium ipsa totam! Veniam
                doloribus eos distinctio libero cupiditate consequuntur id dolorem quia magni praesentium error odit
                laudantium nisi at veritatis ad dolores, voluptate sapiente saepe nihil eveniet repudiandae minus dolore
                blanditiis! Optio nemo impedit corrupti officiis ex dolores quasi, asperiores consectetur veniam
                corporis alias officia eius illum neque doloribus iure qui animi quod rerum. Veritatis ab non
                praesentium, maxime, ipsam enim neque itaque aperiam esse fuga ea nulla magni accusamus incidunt facilis
                ratione quia, est earum consequatur autem architecto maiores! Vel culpa corporis, expedita minima
                reprehenderit incidunt? Perferendis nobis, sit sequi cum eveniet molestiae cupiditate harum minima
                cumque officiis, dolore minus. Facilis voluptates odit fugit quae aperiam voluptatem, soluta itaque
                reiciendis odio repudiandae, officiis tempora ratione doloremque velit neque explicabo voluptas animi
                quidem minima. Repellendus aperiam, iste corporis cumque maiores architecto similique.
              </p>
            </article>

            {/* Image on the right for larger screens */}
            <figure className="hidden lg:block ml-8 mt-14 px-9 ">
              <img src={book} alt="" className="w-100 h-auto rounded-lg shadow-lg shadow-black/20" />
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
      </main>


      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24  bg-black antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          {/* Image on top for mobile view */}
          <figure className="mb-8 lg:hidden text-center">
            <img src={book} alt="" className="w-full h-auto rounded-lg shadow-lg shadow-black/20" />
            <figcaption></figcaption>
          </figure>

          <div  className="flex flex-col-reverse lg:flex-row justify-between">
            {/* Content on the bottom for mobile view */}
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-white">
                    <img className="mr-4 w-16 h-16 rounded-full" src="https://avatars.githubusercontent.com/u/110277485?v=4" alt="Soumargha Bhattacharjee" />
                    <div>
                      <a
                       className="text-xl font-bold text-white">Soumargha Bhattacharjee</a>
                      <p className="text-base text-gray-400">Full stack developer</p>
                      <p className="text-base text-gray-400">
                        <time dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 id="blog1" className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Best practices for successful prototypes
                </h1>
              </header>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui error commodi architecto! Eum earum
                iste facilis obcaecati hic neque corporis, accusamus sequi vitae odit ducimus magnam veritatis harum ab
                magni ut, nobis temporibus sit nesciunt! Odio perferendis soluta atque a sequi corrupti necessitatibus
                non nobis vitae! Saepe omnis quos eaque illum! Eum, laborum modi. Voluptas, quos eaque? Hic quis
                consequatur excepturi reprehenderit nulla, illo atque voluptate impedit laudantium ipsa totam! Veniam
                doloribus eos distinctio libero cupiditate consequuntur id dolorem quia magni praesentium error odit
                laudantium nisi at veritatis ad dolores, voluptate sapiente saepe nihil eveniet repudiandae minus dolore
                blanditiis! Optio nemo impedit corrupti officiis ex dolores quasi, asperiores consectetur veniam
                corporis alias officia eius illum neque doloribus iure qui animi quod rerum. Veritatis ab non
                praesentium, maxime, ipsam enim neque itaque aperiam esse fuga ea nulla magni accusamus incidunt facilis
                ratione quia, est earum consequatur autem architecto maiores! Vel culpa corporis, expedita minima
                reprehenderit incidunt? Perferendis nobis, sit sequi cum eveniet molestiae cupiditate harum minima
                cumque officiis, dolore minus. Facilis voluptates odit fugit quae aperiam voluptatem, soluta itaque
                reiciendis odio repudiandae, officiis tempora ratione doloremque velit neque explicabo voluptas animi
                quidem minima. Repellendus aperiam, iste corporis cumque maiores architecto similique.
              </p>
            </article>

            {/* Image on the right for larger screens */}
            <figure className="hidden lg:block ml-8 mt-14 px-9 ">
              <img src={book} alt="" className="w-100 h-auto rounded-lg shadow-lg shadow-black/20" />
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
      </main>


      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-black antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
           {/* Image on top for mobile view */}
           <figure className="mb-8 lg:hidden text-center">
            <img src={book} alt="" className="w-full h-auto rounded-lg shadow-lg shadow-black/20" />
            <figcaption></figcaption>
          </figure>

          <div  className="flex flex-col-reverse lg:flex-row justify-between">
            {/* Content on the bottom for mobile view */}
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-white">
                    <img className="mr-4 w-16 h-16 rounded-full" src="https://avatars.githubusercontent.com/u/110277485?v=4" alt="Jese Leos" />
                    <div>
                      <a
                       className="text-xl font-bold text-white">Soumargha Bhattacharjee</a>
                      <p className="text-base text-gray-400">Full stack developer</p>
                      <p className="text-base text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </address>
                <h1 id="blog1" className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                  Best practices for successful prototypes
                </h1>
              </header>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui error commodi architecto! Eum earum
                iste facilis obcaecati hic neque corporis, accusamus sequi vitae odit ducimus magnam veritatis harum ab
                magni ut, nobis temporibus sit nesciunt! Odio perferendis soluta atque a sequi corrupti necessitatibus
                non nobis vitae! Saepe omnis quos eaque illum! Eum, laborum modi. Voluptas, quos eaque? Hic quis
                consequatur excepturi reprehenderit nulla, illo atque voluptate impedit laudantium ipsa totam! Veniam
                doloribus eos distinctio libero cupiditate consequuntur id dolorem quia magni praesentium error odit
                laudantium nisi at veritatis ad dolores, voluptate sapiente saepe nihil eveniet repudiandae minus dolore
                blanditiis! Optio nemo impedit corrupti officiis ex dolores quasi, asperiores consectetur veniam
                corporis alias officia eius illum neque doloribus iure qui animi quod rerum. Veritatis ab non
                praesentium, maxime, ipsam enim neque itaque aperiam esse fuga ea nulla magni accusamus incidunt facilis
                ratione quia, est earum consequatur autem architecto maiores! Vel culpa corporis, expedita minima
                reprehenderit incidunt? Perferendis nobis, sit sequi cum eveniet molestiae cupiditate harum minima
                cumque officiis, dolore minus. Facilis voluptates odit fugit quae aperiam voluptatem, soluta itaque
                reiciendis odio repudiandae, officiis tempora ratione doloremque velit neque explicabo voluptas animi
                quidem minima. Repellendus aperiam, iste corporis cumque maiores architecto similique.
              </p>
            </article>

            {/* Image on the right for larger screens */}
            <figure className="hidden lg:block ml-8 mt-14 px-9 ">
              <img src={book} alt="" className="w-100 h-auto rounded-lg shadow-lg shadow-black/20" />
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
      </main>


      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-black antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
           {/* Image on top for mobile view */}
           <figure className="mb-8 lg:hidden text-center">
            <img src={book} alt="" className="w-full h-auto rounded-lg shadow-lg shadow-black/20" />
            <figcaption></figcaption>
          </figure>

          <div  className="flex flex-col-reverse lg:flex-row justify-between">
            {/* Content on the bottom for mobile view */}
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-white">
                    <img className="mr-4 w-16 h-16 rounded-full" src="https://avatars.githubusercontent.com/u/110277485?v=4" alt="Jese Leos" />
                    <div>
                      <a
                       className="text-xl font-bold text-white">Soumargha Bhattacharjee</a>
                      <p className="text-base text-gray-400">Full stack developer</p>
                      <p className="text-base text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </address>
                <h1 id="blog1" className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                  Best practices for successful prototypes
                </h1>
              </header>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui error commodi architecto! Eum earum
                iste facilis obcaecati hic neque corporis, accusamus sequi vitae odit ducimus magnam veritatis harum ab
                magni ut, nobis temporibus sit nesciunt! Odio perferendis soluta atque a sequi corrupti necessitatibus
                non nobis vitae! Saepe omnis quos eaque illum! Eum, laborum modi. Voluptas, quos eaque? Hic quis
                consequatur excepturi reprehenderit nulla, illo atque voluptate impedit laudantium ipsa totam! Veniam
                doloribus eos distinctio libero cupiditate consequuntur id dolorem quia magni praesentium error odit
                laudantium nisi at veritatis ad dolores, voluptate sapiente saepe nihil eveniet repudiandae minus dolore
                blanditiis! Optio nemo impedit corrupti officiis ex dolores quasi, asperiores consectetur veniam
                corporis alias officia eius illum neque doloribus iure qui animi quod rerum. Veritatis ab non
                praesentium, maxime, ipsam enim neque itaque aperiam esse fuga ea nulla magni accusamus incidunt facilis
                ratione quia, est earum consequatur autem architecto maiores! Vel culpa corporis, expedita minima
                reprehenderit incidunt? Perferendis nobis, sit sequi cum eveniet molestiae cupiditate harum minima
                cumque officiis, dolore minus. Facilis voluptates odit fugit quae aperiam voluptatem, soluta itaque
                reiciendis odio repudiandae, officiis tempora ratione doloremque velit neque explicabo voluptas animi
                quidem minima. Repellendus aperiam, iste corporis cumque maiores architecto similique.
              </p>
            </article>

            {/* Image on the right for larger screens */}
            <figure className="hidden lg:block ml-8 mt-14 px-9 ">
              <img src={book} alt="" className="w-100 h-auto rounded-lg shadow-lg shadow-black/20" />
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
      </main>


      
    </div>
  );
}

export default BlogsDes;
