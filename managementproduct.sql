-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 28, 2020 at 07:54 PM
-- Server version: 10.3.22-MariaDB-1
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `managementproduct`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL,
  `booking_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `booking_phone` int(11) NOT NULL,
  `booking_date` datetime NOT NULL,
  `booking_status` tinyint(5) NOT NULL DEFAULT 0,
  `hospitals_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`booking_id`, `booking_name`, `booking_phone`, `booking_date`, `booking_status`, `hospitals_id`) VALUES
(1, 'محمد علي بدري', 1154913425, '2020-07-01 21:00:00', 0, 1),
(2, 'محمد علي', 1020659622, '2021-08-10 15:04:00', 0, 1),
(4, 'سالم علي', 1154913425, '2020-06-15 13:30:00', 1, 2),
(5, 'محمد علي احمد', 1154913425, '2020-07-09 04:49:00', 0, 1),
(6, 'محمد علي احمد', 1154913425, '2020-07-30 03:59:00', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ceo`
--

CREATE TABLE `ceo` (
  `ceo_id` int(11) NOT NULL,
  `ceo_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ceo_aka` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ceo_word` text CHARACTER SET utf8 DEFAULT NULL,
  `ceo_avatar` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ceo`
--

INSERT INTO `ceo` (`ceo_id`, `ceo_name`, `ceo_aka`, `ceo_word`, `ceo_avatar`) VALUES
(1, ' مجدي يعقوب', 'دكتور جراحة قلب', '<p>وُلد مجدي حبيب يعقوب في محافظة الشرقية في 16 تشرين الثاني/ نوفمبر 1935. درس الطب في جامعة القاهرة وتخصص في جراحة القلب. بعد انتقاله إلى بريطانيا، أصبح مستشارًا اختصاصيًا في أمراض القلب والصدر في مستشفى هارتفيلد في عام 1962. تحت قيادته، بدأ برنامج الزراعة في مستشفى هارفيلد عام 1980، وبحلول نهاية العقد، قام هو وفريقه بتنفيذ 1000 عملية، وأصبح مستشفى هارفيلد المركز الرئيسي لزرع الأعضاء في المملكة المتحدة. أسس السير مجدي يعقوب &ldquo;سلسلة الأمل&rdquo; في المملكة المتحدة عام 1995. والتي هي مؤسسةٌ طبيةٌ خيرية &rlm;تهدف إلى مساعدة الأطفال الذين يعانون من أمراضٍ قلبيةٍ خطيرة تهدد حياتهم</p>', '861052_1srv-img6-1.jpg'),
(10, 'إبراهيم الفقي', 'مجلس إدارة المركز الكندي للتنمية البشرية', '<p>ولد إبراهيم محمد السيد الفقي في حي فيكتوريا <a title=\"الإسكندرية\" href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9\">بمدينة الإسكندرية</a>، حصل على بطولة مصر في <a title=\"كرة الطاولة\" href=\"https://ar.wikipedia.org/wiki/%D9%83%D8%B1%D8%A9_%D8%A7%D9%84%D8%B7%D8%A7%D9%88%D9%84%D8%A9\">تنس الطاولة</a> لعدة سنوات ومثل <a title=\"مصر\" href=\"https://ar.wikipedia.org/wiki/%D9%85%D8%B5%D8%B1\">مصر</a> مع المنتخب الوطني في بطولة العالم لتنس الطاولة بألمانيا الغربية عام <a title=\"1969\" href=\"https://ar.wikipedia.org/wiki/1969\">1969</a>. وفي الحياة المهنية فقد تدرج في الوظائف حتى درجة مدير قسم في قطاع الفنادق بفندق فلسطين بالإسكندرية ووصل إلى الدرجة الثالثة وهو في سن الخامسة والعشرين. هاجر إلى كندا لدراسة الإدارة، وبدأ هناك في وظيفة تنظيف الأطباق وفي وظيفة حارس لمطعم وحمال كراسي وطاولات في فندق.</p>', '949847__16795_Fiqig.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `com`
--

CREATE TABLE `com` (
  `com_id` int(11) NOT NULL,
  `com_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ceo_link` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `com_avatar` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `com`
--

INSERT INTO `com` (`com_id`, `com_name`, `ceo_link`, `com_avatar`) VALUES
(1, 'شركة الاغذيه - تصدير المنتجات', 'https://developer.mozilla.org/en-us/docs/web/css/transform-function/rotate', '167226_3instagram_profile_image.png'),
(3, 'شركة الدولية للعلاج - علاج باطنه', 'http://127.0.0.1/1_template/dist/admin/dashboard.php?page=pages', '167226_3instagram_profile_image.png'),
(4, 'شركة اللبيني - للسراير', 'https://www.nicesnippets.com/snippet/admin-panel-dashboard-card-design-usign-html-and-css', '315386_index.png'),
(5, 'شركة الفضل  - سياحة مرضيه', 'https://fontawesome.com/icons/chair-office?style=solid', '500757_inde32x.jpg'),
(6, 'شركة عيون مصر  - سياحة دولية', 'https://fontawesome.com/icons/chair-office?style=solid', '550483_6world.png');

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `hospital_id` int(11) NOT NULL,
  `hospital_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `hospital_description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `hospital_avatar` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `hospital_status` tinyint(5) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`hospital_id`, `hospital_name`, `hospital_description`, `hospital_avatar`, `hospital_status`) VALUES
(1, 'مستشفي الريان تخصصي', '<p>تخصص امراض نساء وباطنه</p>', '936240_1TypoJoker.jpg', 0),
(2, 'مستشفي الريان', '<p>باطنه وصدر فقط</p>', '936240_1TypoJoker.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `user_pass` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_avatar` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `user_group` int(11) DEFAULT 0,
  `bio` text CHARACTER SET utf8 NOT NULL,
  `section` varchar(255) CHARACTER SET utf8 NOT NULL,
  `social_fb` varchar(255) CHARACTER SET utf8 NOT NULL,
  `social_twitter` varchar(255) CHARACTER SET utf8 NOT NULL,
  `social_linked` varchar(255) CHARACTER SET utf8 NOT NULL,
  `social_google` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_pass`, `user_email`, `user_avatar`, `user_group`, `bio`, `section`, `social_fb`, `social_twitter`, `social_linked`, `social_google`) VALUES
(1, 'mohamed', '827ccb0eea8a706c4c34a16891f84e7b', 'mssmahmoud4@gmail.com', '555123_1maxresdefault.jpg', 1, '<p>احب كل ما هو جديد في عالم التكنلوجيه</p>', 'مؤسس', '', '', '', ''),
(2, 'محمود عادل علي', '2dd2617580441c8917d1a2935718d1f6', 'mssmahmoud4@gmail.com', '135999_2IMG20200412193012.jpg', 1, '<p>احب كل شئ</p>', 'مؤسس', '', '', '', ''),
(3, 'محمود عادل', 'e6e537d46540581aafa8d505896dee78', 'mssmahmoud4@gmail.com', '421591_3IMG20200412193106.jpg', 1, '<p>احب التطوير والتصميم</p>', 'مؤسس', '', '', '', ''),
(4, 'محمود منصور', '25f9e794323b453885f5181f1b624d0b', 'mahmoud@gmail.com', '683437_53274799_1798933010210883_7808131702382919680_n.jpg', 0, '<p>يقوم بتحديد الأهداف والرؤية والرسالة الإستراتيجية للشركة وتحليل البيئة التنظيمية الداخلية والخارجية للتعرف على مواطن القوة والضعف والفرص والتهديدات في إدارة التسويق والمبيعات،</p>', 'التسويق الالكتروني', 'www.facebook.com', 'www.twitter.com', 'www.limkedin.com', 'www.google.com'),
(6, 'محمود منصور احمد', '25f9e794323b453885f5181f1b624d0b', 'mahmoud@gmail.com', '738172_53274799_1798933010210883_7808131702382919680_n.jpg', 0, '<p>يقوم بتحديد الأهداف والرؤية والرسالة الإستراتيجية للشركة وتحليل البيئة التنظيمية الداخلية والخارجية للتعرف على مواطن القوة والضعف والفرص والتهديدات في إدارة التسويق والمبيعات،</p>', 'التسويق الالكتروني', 'www.facebook.com', 'www.twitter.com', 'www.limkedin.com', 'www.google.com'),
(7, 'محمود منصور السيد', '25f9e794323b453885f5181f1b624d0b', 'mahmoud@gmail.com', '738172_53274799_1798933010210883_7808131702382919680_n.jpg', 0, '<p>يقوم بتحديد الأهداف والرؤية والرسالة الإستراتيجية للشركة وتحليل البيئة التنظيمية الداخلية والخارجية للتعرف على مواطن القوة والضعف والفرص والتهديدات في إدارة التسويق والمبيعات،</p>', 'التسويق الالكتروني', 'www.facebook.com', 'www.twitter.com', 'www.limkedin.com', 'www.google.com'),
(8, 'علي ربيع المنشاوي', '70873e8580c9900986939611618d7b1e', 'mahmoud@gmail.com', '246321_8IMG20200412193106.jpg', 0, '<p>يقوم بتحديد الأهداف والرؤية والرسالة الإستراتيجية للشركة وتحليل البيئة التنظيمية الداخلية والخارجية للتعرف على مواطن القوة والضعف والفرص والتهديدات في إدارة التسويق والمبيعات،</p>', 'التسويق الالكتروني', 'www.facebook.com', 'www.twitter.com', 'www.limkedin.com', 'www.google.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD UNIQUE KEY `unique` (`booking_id`);

--
-- Indexes for table `ceo`
--
ALTER TABLE `ceo`
  ADD UNIQUE KEY `ceo_id` (`ceo_id`);

--
-- Indexes for table `com`
--
ALTER TABLE `com`
  ADD PRIMARY KEY (`com_id`);

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD UNIQUE KEY `hospital_id` (`hospital_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `user_name_2` (`user_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ceo`
--
ALTER TABLE `ceo`
  MODIFY `ceo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `com`
--
ALTER TABLE `com`
  MODIFY `com_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `hospital_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
