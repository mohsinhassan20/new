//중성화여부 -> Neutralization
const data = [
  {
    userName: "Odette Walter",
    type: "dog",
    name: "미미",
    phoneNumber: "010-4994-5715",
    age: 2,
    gender: "female",
    neutralization: "Y",
    selected: false,
    height: "57,39",

    weight: 9,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1362328147/photo/confident-young-asian-man-looking-at-smartphone-while-working-on-laptop-computer-in-home.jpg?b=1&s=170667a&w=0&k=20&c=-ofBXV_0DA0db11J-acWDzUiyYfYva4ePPLjnWhAOs0=",
    count: 0,
  },
  {
    userName: "Marshall Austin",
    type: "dog",
    name: "노라",
    phoneNumber: "010-8500-3180",
    age: 6,
    gender: "female",
    neutralization: "Y",
    selected: false,
    height: "56,34",
    weight: 8.4,
    status: "fat",
    image:
      "https://media.istockphoto.com/id/1354077790/photo/man-working-at-home.jpg?s=612x612&w=0&k=20&c=ePzpG0JgiHd4R85JyoyxIndl4vYQP6avw9nNJ6Zgg8w=",
  },
  {
    userName: "Alika Brooks",
    type: "dog",
    name: "동수",
    phoneNumber: "010-3570-5700",
    age: 1,
    gender: "male",
    neutralization: "Y",
    selected: false,
    height: "39,36",
    weight: 7.3,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1371116757/photo/a-budgeting-app-can-be-a-great-tool-to-help-you-meet-your-goals.jpg?s=612x612&w=0&k=20&c=bcPeFqIppDPQQhNwIPq6iUt8-KJxIebGKJXfnsjTTYg=",
  },
  {
    userName: "Fletcher Mcmahon",
    type: "dog",
    name: "로나",
    phoneNumber: "010-7438-9998",
    age: 5,
    gender: "female",
    neutralization: "Y",
    selected: false,
    height: "38,30",
    weight: 5.6,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=",
  },
  {
    userName: "Evan Wilkerson",
    type: "dog",
    name: "산타",
    phoneNumber: "010-4675-7095",
    age: 14,
    gender: "male",
    neutralization: "Y",
    selected: false,
    height: "43,35",
    weight: 7.9,
    status: "fat",
    image:
      "https://media.istockphoto.com/id/1326943475/photo/beautiful-young-woman-of-mongolian-ethnicity-using-a-smart-phone-at-home.jpg?b=1&s=170667a&w=0&k=20&c=qtVoiG_nLlZm-8EsFf81shC7mTwr6XYyWxRWscs67m4=",
  },
  {
    userName: "Haley Warner",
    type: "dog",
    name: "엔젤",
    phoneNumber: "010-5512-1019",
    age: 3,
    gender: "male",
    neutralization: "Y",
    selected: false,
    height: "36,32",
    weight: 5.2,
    status: "normal",
    image:
      "https://media.istockphoto.com/id/1350717417/photo/young-woman-talking-on-smart-phone-at-home-office.jpg?b=1&s=170667a&w=0&k=20&c=Nv3dO2pTclFapkB-tBH7r24WaPMGZOcqY2y4u1PwBbk=",
  },
  {
    userName: "Galvin Cleveland",
    type: "dog",
    name: "트리",
    phoneNumber: "010-3610-2146",
    age: 5,
    gender: "male",
    neutralization: "Y",
    selected: false,
    height: "42,34",
    weight: 6.3,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1365824279/photo/black-businesswoman-sitting-at-her-desk-working-on-a-laptop-computer-smiling-successful.jpg?b=1&s=170667a&w=0&k=20&c=aehQ5R9tH3LaD54KTuFouYdjUKOKAl0pYdcdOaGIfJs=",
  },
  {
    userName: "Rafael Sherman",
    type: "dog",
    name: "파도",
    phoneNumber: "010-8138-7555",
    age: 3,
    gender: "female",
    neutralization: "Y",
    selected: false,
    height: "30,28",
    weight: 3.7,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1365412652/photo/multiethnic-diverse-office-conference-room-meeting-team-of-two-creative-entrepreneurs-talk.jpg?b=1&s=170667a&w=0&k=20&c=lN50jV9S3uukAS0etC8xECGC0i6lb_e1lE3epHy-bi8=",
  },
  {
    userName: "Mechelle Malone",
    type: "dog",
    name: "소리",
    phoneNumber: "010-9958-8690",
    age: 5,
    gender: "female",
    neutralization: "Y",
    selected: false,
    height: "32,25",
    weight: 3,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.jpg?s=612x612&w=0&k=20&c=09GhmTnB6Wri9t3F13NXvYw-nQhV6K74CbxBgFWuAQw=",
  },
  {
    userName: "Rafael Sherman",
    type: "dog",
    name: "바다",
    phoneNumber: "010-4583-4966",
    age: 5,
    gender: "female",
    neutralization: "Y",
    selected: false,
    height: "29,24",
    weight: 3.1,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1368573426/photo/mature-african-man-talking-on-cellphone-using-laptop-in-office.jpg?s=612x612&w=0&k=20&c=uh4TcBEIPxm6NyY4gYD9X-MA89iJsVOIov5KReJzExo=",
  },
  {
    userName: "Xee Xing Ping",
    type: "dog",
    name: "태양",
    phoneNumber: "010-7276-2200",
    age: 5,
    gender: "male",
    neutralization: "Y",
    selected: false,
    height: "36,29",
    weight: 5.2,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1339296498/photo/beautiful-mid-adult-woman-walking-and-texting-message-on-mobile-phone-outside-business-center.jpg?s=612x612&w=0&k=20&c=YW6PQ28LuVnzqhJh-s3TA1SogZ8uotTBdDU1Mr1a2sY=",
  },
  {
    userName: "Edward Johonson",
    type: "dog",
    name: "태풍",
    phoneNumber: "010-8517-6319",
    age: 5,
    gender: "male",
    neutralization: "Y",
    selected: false,
    height: "44,32",
    weight: 8.7,
    status: "overweight",
    image:
      "https://media.istockphoto.com/id/1369011740/photo/portrait-of-smiling-arab-man-using-smartphone-at-home.jpg?s=612x612&w=0&k=20&c=go5E19k_8MTRLAmLB20IV8jG0TM76CejcF2H_ZQugv0=",
  },
  //   {
  //     type: "dog",
  //     name: "바람",
  //     phoneNumber: "010-9512-0487",
  //     age: 14,
  //     gender: "male",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "25,25",
  //     weight: 3.5,
  //     status: "normal",
  //     image:
  //       "https://media.istockphoto.com/id/1342439538/photo/happy-man-drinking-checking-his-cell-phone-at-a-coffee-shop-while-drinking-a-cappuccino.jpg?s=612x612&w=0&k=20&c=wbDiCdUcAGuhoT-vusBHymFu08nZUYYL9dSTV5iy8zE= ",
  //   },
  //   {
  //     type: "dog",
  //     name: "고미",
  //     phoneNumber: "010-5836-4366",
  //     age: 6,
  //     gender: "male",
  //     neutralization: "Y",
  //     selected: false,
  //     height: 29,
  //     weight: 7.8,
  //     status: "overweight",
  //     image:
  //       "https://media.istockphoto.com/id/1356527683/photo/male-vlogger-or-social-influencer-in-city-using-mobile-phone-on-street-to-post-to-social-media.jpg?s=612x612&w=0&k=20&c=OAqb7FepDByIr11CWuIfUMfuah7DBJrmDnisjAFYcK4=",
  //   },
  //   {
  //     type: "dog",
  //     name: "꼬물",
  //     phoneNumber: "010-9241-6144",
  //     age: 9,
  //     gender: "male",
  //     neutralization: "Y",
  //     selected: false,
  //     height: 21,
  //     weight: 3.2,
  //     status: "normal",
  //     image:
  //       "https://media.istockphoto.com/id/1383022738/photo/beautiful-smiling-girl-with-curly-hairstyle-using-smart-phone.jpg?s=612x612&w=0&k=20&c=6Ra5AkI9M6cDeSwvKcNQ12qhH6TJ6TtGM1A9cN18Hxs=",
  //   },
  //   {
  //     type: "dog",
  //     name: "다복이",
  //     phoneNumber: "010-4538-2005",
  //     age: 3,
  //     gender: "female",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "null",
  //     weight: 9.5,
  //     status: "overweight",
  //     image:
  //       "https://media.istockphoto.com/id/1367696010/photo/at-home.jpg?s=612x612&w=0&k=20&c=quYI8bUeaE4w_HHLWWkknLfCSR-SH4SaWorbhzi9_gE=",
  //   },
  //   {
  //     type: "dog",
  //     name: "동이",
  //     phoneNumber: "010-9339-4901",
  //     age: 17,
  //     gender: "male",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "20,28",
  //     weight: 4.8,
  //     status: "overweight",
  //     image:
  //       "https://media.istockphoto.com/id/1348209421/photo/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-modern-startup-office.jpg?s=612x612&w=0&k=20&c=-YOjhdxdWLjflmpzPyUjtYL80zhbJYqSANk6hhDPXL0=",
  //   },
  //   {
  //     type: "dog",
  //     name: "땅콩",
  //     phoneNumber: "010-2234-4582",
  //     age: 9,
  //     gender: "male",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "23,30",
  //     weight: 6.4,
  //     status: "overweight",
  //     image:
  //       "https://media.istockphoto.com/id/1366960612/photo/adult-foreman-in-warehouse.jpg?s=612x612&w=0&k=20&c=ArunEWxTTvarUgvH4xW9Kv_8RJdwF9f5zm7A2OSLx2w=",
  //   },
  //   {
  //     type: "dog",
  //     name: "레오",
  //     phoneNumber: "010-9512-0487",
  //     age: 4,
  //     gender: "male",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "null",
  //     weight: 4.5,
  //     status: "fat",
  //     image:
  //       "https://media.istockphoto.com/id/1355030282/photo/shot-of-a-mature-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OItGhzI7XeKceicohbtU0q2ss0aFoMhF3kZfTYPXFLE=",
  //   },
  //   {
  //     type: "dog",
  //     name: "로이",
  //     phoneNumber: "010-5836-4366",
  //     age: 8,
  //     gender: "male",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "null",
  //     weight: 2.75,
  //     status: "normal",
  //     image:
  //       "https://media.istockphoto.com/id/1356122303/photo/young-man-working-from-home-creative-professional-have-meeting-online.jpg?s=612x612&w=0&k=20&c=_Rl9LQjd81CxR-bIT529IS5fBShp2kjDiFIyFRa8DqY=",
  //   },
  //   {
  //     type: "dog",
  //     name: "롱롱",
  //     phoneNumber: "010-9241-6144",
  //     age: 14,
  //     gender: "female",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "null",
  //     weight: 4.8,
  //     status: "overweight",
  //     image:
  //       "https://media.istockphoto.com/id/1347879996/photo/shot-of-a-young-woman-using-a-laptop-while-working-in-a-server-room.jpg?s=612x612&w=0&k=20&c=xe2m3QQoTVoPllIrEjq3fNYfa43reyO0A6my6N8EHbE=",
  //   },
  //   {
  //     type: "dog",
  //     name: "리꼬",
  //     phoneNumber: "010-4538-2005",
  //     age: 6,
  //     gender: "female",
  //     neutralization: "Y",
  //     selected: false,
  //     height: "null",
  //     weight: "null",
  //     status: "null",
  //     image:
  //       "https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8=",
  //   },
];

const revenueDetails = [
  {
    name: "1 Dec",
    uv: 0,
    revenue: 50,
    amt: 2400,
  },
  {
    name: "7 Dec",
    uv: 50,
    revenue: 120,
    amt: 2210,
  },
  {
    name: "14 Dec",
    uv: 100,
    revenue: 50,
    amt: 2290,
  },
  {
    name: "21 Dec",
    uv: 150,
    revenue: 170,
    amt: 2000,
  },
  {
    name: "28 Dec",
    uv: 200,
    revenue: 70,
    amt: 2181,
  },
  {
    name: "31 Dec",
    uv: 200,
    revenue: 150,
    amt: 2181,
  },
];

const userInfo = [
  {
    name: "Odette Walter",
    date: "Nov 5, 2023",
    message: "mattis semper, dui lectus rutrum urna, nec luctus felis purus",
    image:
      "https://media.istockphoto.com/id/1362328147/photo/confident-young-asian-man-looking-at-smartphone-while-working-on-laptop-computer-in-home.jpg?b=1&s=170667a&w=0&k=20&c=-ofBXV_0DA0db11J-acWDzUiyYfYva4ePPLjnWhAOs0=",
    border: true,
    count: "1",
  },
  {
    name: "Marshall Austin",
    date: "Sep 26, 2022",
    message:
      "Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus,",
    image:
      "https://media.istockphoto.com/id/1354077790/photo/man-working-at-home.jpg?s=612x612&w=0&k=20&c=ePzpG0JgiHd4R85JyoyxIndl4vYQP6avw9nNJ6Zgg8w=",
    count: "2",
  },
  {
    name: "Alika Brooks",
    date: "Oct 20, 2022",
    message:
      "Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque",
    image:
      "https://media.istockphoto.com/id/1374452699/photo/man-working-at-home-on-laptop-computer.jpg?s=612x612&w=0&k=20&c=ccUggDVwM47noeD1J0GiSJVAbxmrqeG82eWLCLGmluA=",
    icon: "checkGreen",
  },
  {
    name: "Maryam Alvarez",
    date: "May 6, 2023",
    message:
      "quis accumsan convallis, ante lectus convallis est, vitae sodales nisi",
    image:
      "https://media.istockphoto.com/id/1371116757/photo/a-budgeting-app-can-be-a-great-tool-to-help-you-meet-your-goals.jpg?s=612x612&w=0&k=20&c=bcPeFqIppDPQQhNwIPq6iUt8-KJxIebGKJXfnsjTTYg=",
    icon: "exclamation",
  },
  {
    name: "Fletcher Mcmahon",
    date: "Jul 29, 2023",
    message: "tellus non magna. Nam ligula elit, pretium et, rutrum non,",
    image:
      "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=",
    icon: "checkGray",
  },
  {
    name: "Evan Wilkerson",
    date: "Feb 23, 2023",
    message: "nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut",
    image:
      "https://media.istockphoto.com/id/1365824279/photo/black-businesswoman-sitting-at-her-desk-working-on-a-laptop-computer-smiling-successful.jpg?b=1&s=170667a&w=0&k=20&c=aehQ5R9tH3LaD54KTuFouYdjUKOKAl0pYdcdOaGIfJs=",
  },
  {
    name: "Haley Warner",
    date: "Jun 17, 2023",
    message:
      "gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie",
    image:
      "https://media.istockphoto.com/id/1365412652/photo/multiethnic-diverse-office-conference-room-meeting-team-of-two-creative-entrepreneurs-talk.jpg?b=1&s=170667a&w=0&k=20&c=lN50jV9S3uukAS0etC8xECGC0i6lb_e1lE3epHy-bi8=",
  },
  {
    name: "Galvin Cleveland",
    date: "Jan 9, 2023",
    message:
      "magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna.",
    image:
      "https://media.istockphoto.com/id/1401269015/photo/concentrated-asian-middle-aged-female-businesswoman-using-portable-computer.jpg?b=1&s=170667a&w=0&k=20&c=S71c92sfP6BeoNUoCH5JbLSm_sFQ39Ug8FcQ8WY-dJk=",
  },
  {
    name: "Rafael Sherman",
    date: "Aug 20, 2023",
    message:
      "auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan",
    image:
      "https://media.istockphoto.com/id/1370511233/photo/young-woman-working-from-home-with-a-boston-terrier-dog-freelancer-businesswoman-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=gBZp146qhWPdsfKExEZnM3ZuLXDjbPSBwyVRA5OQZT4=",
  },
  {
    name: "Mechelle Malone",
    date: "Jul 2, 2022",
    message: "In ornare sagittis felis. Donec tempor, est ac mattis semper,",
    image:
      "https://media.istockphoto.com/id/1370511233/photo/young-woman-working-from-home-with-a-boston-terrier-dog-freelancer-businesswoman-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=gBZp146qhWPdsfKExEZnM3ZuLXDjbPSBwyVRA5OQZT4=",
  },
  // {
  //     name: "Rafael Sherman",
  //     date: "Aug 20, 2023",
  //     message: "auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan"
  //     ,
  //     image: "https://media.istockphoto.com/id/1370511233/photo/young-woman-working-from-home-with-a-boston-terrier-dog-freelancer-businesswoman-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=gBZp146qhWPdsfKExEZnM3ZuLXDjbPSBwyVRA5OQZT4="
  // },
];

export default { revenueDetails, data, userInfo };
