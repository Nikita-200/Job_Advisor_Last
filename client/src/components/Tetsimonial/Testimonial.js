import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section className='testimonial'>
    <div className="testimonials">
      <div className="block">
        <h2>Testimonials</h2>
        <h5>Why people love Us</h5>
      </div>

      <blockquote className="block">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius adipisci, sed libero. Iste asperiores suscipit, consequatur debitis animi impedit numquam facilis iusto porro labore dolorem, maxime magni."
        </p>
        <footer>
          <cite><span>Alex McGee</span></cite>
        </footer>
      </blockquote>

      <blockquote className="block">
        <p>
          "Totam at eius excepturi deleniti sed, error repellat itaque omnis maiores tempora ratione dolor velit minus porro aspernatur repudiandae labore quas adipisci esse, nulla tempore voluptatibus cupiditate."
        </p>
        <footer>
          <cite><span>Melissa Washington</span></cite>
        </footer>
      </blockquote>

      <blockquote className="block">
        <p>
          "Possimus deserunt nisi perferendis, consequuntur odio et aperiam, est, dicta dolor itaque sunt laborum, magni qui optio illum dolore laudantium similique harum. Ab provident, porro atque."
        </p>
        <footer>
          <cite><span>Joseph Salazar</span></cite>
        </footer>
      </blockquote>

      <blockquote className="block">
        <p>
          "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendis quae repellat, modi non, veniam natus soluta at optio vitae in excepturi minima eveniet dolor."
        </p>
        <footer>
          <cite><span>Maria Douglas</span></cite>
        </footer>
      </blockquote>

      <blockquote className="block">
        <p>
          "Accusantium at omnis vel, possimus fugiat explicabo necessitatibus facilis tempore voluptate, ea in, sunt magnam officia? Beatae reprehenderit non tempore, assumenda reiciendis."
        </p>
        <footer>
          <cite><span>Gary Benham</span></cite>
        </footer>
      </blockquote>
    </div>
    </section>
  );
};

export default Testimonial;
