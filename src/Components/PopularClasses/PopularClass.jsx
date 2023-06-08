import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";

const PopularClass = () => {
  const [classes, setClasses] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTY4NjIzNDkxMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "PHero MERN Stack Course",
      students: 120,
    },
    {
      image:
        "https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3N8fHx8fHwxNjg2MjM0NTkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Digital Marketing Mastery",
      students: 85,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZW5nbGlzaHx8fHx8fDE2ODYyMzQ4MDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Spoken English Fluency",
      students: 75,
    },
    {
      image:
        "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjIzNTI4Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Advance Ethical Hacking",
      students: 65,
    },
    {
      image:
        "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWR1Y2F0aW9ufHx8fHx8MTY4NjIzNTQyOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Communication Hacks Course",
      students: 60,
    },
    {
      image:
        "https://images.hdqwalls.com/wallpapers/bthumb/python-logo-4k-i6.jpg",
      name: "Python Programming",
      students: 50,
    },
  ]);

  return (
    <div>
      {" "}
      <div className='md:max-w-7xl mx-auto'>
        <SectionTitle title='Popular Classes'></SectionTitle>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 my-5'>
          {classes.map((cls) => (
            <ClassCard cls={cls} key={cls?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
