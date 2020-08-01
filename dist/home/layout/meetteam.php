<section>
            <div class="spacing bottom-spac190 ">
                <div class="container mx-auto">
                    <div class="sec-tl2 text-center ">
                        <i>مؤسسين الشركة</i>
                        <h2 class="no-bf" itemprop="headline">قابل فريقنا</h2>
                    </div>
                    <div class="remove-ext3">
                        <div class="row">
                            <?php $teamData = getContentV2("*","users",$conn,"user_group" ,"=", 1);
                                foreach ($teamData as $userValue) {
                                
                                    ?>

                            <div class="col-md-4 col-sm-6 col-lg-4">
                                <div class="team-bx style2 text-center">
                                    <div class="team-thumb hrz brd-rd50">
                                        <a class="theme-bf-bg" href="#" title="" itemprop="url"><img
                                                src="../admin/uploads/<?php echo $userValue['user_avatar']?>" alt="team-img2-1.jpg"
                                                itemprop="image"></a>
                                        <div class="team-scl">
                                            <a class="brd-rd50"
                                                href="<?php echo $userValue['social_fb']?>"
                                                title="Facebook" itemprop="url" target="_blank"><i
                                                    class="fa fa-facebook"></i></a>
                                            <a class="brd-rd50" href="#" title="Google Plus" itemprop="url"
                                                target="_blank"><i class="fa fa-google-plus"></i></a>
                                            <a class="brd-rd50" href="<?php echo $userValue['social_twitter']?>" title="Twitter"
                                                itemprop="url" target="_blank"><i class="fa fa-twitter"></i></a>
                                            <a class="brd-rd50" href="<?php echo $userValue['social_linked']?>" title="Linkedin" itemprop="url"
                                                target="_blank"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div class="team-info">
                                        <h4 itemprop="headline"><a href="#" title="" itemprop="url">
                                        <?php echo $userValue['user_name']?></a>
                                        </h4>
                                        <span> <?php echo $userValue['section']?></span>
                                        <a href="#" title="" itemprop="url"><i
                                                class="fa fa-envelope-o"></i><?php echo $userValue['user_email']?></a>
                                    </div>
                                </div>
                            </div>
                                <?php
                                }
                                ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>