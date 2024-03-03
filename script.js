const loadAllData = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const allPost = data.posts
    // console.log(post)
    displayAllData(allPost);
}
const displayAllData = (allPost) =>{
    // console.log(allPost);
    const postContainer = document.getElementById('post-container');
    allPost.forEach((post) =>{
        // console.log(post);
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 border p-5 lg:p-8 rounded-3xl">
        <div>
            <!-- --------- -->
            <div class="indicator">
                <span class="indicator-item badge badge-secondary"></span> 
                <div class="grid w-[72px] h-[72px] bg-base-300 place-items-center rounded-2xl"><img class="rounded-2xl" src="${post.image}" alt=""></div>
              </div>
        </div>
        <div class="w-full">
            <!-- child-1-->
            <div class="flex gap-5">
                <h4 class="text-sm font-medium text-[#12132dcc]">#${post.category}</h4>
                <h4 class="text-sm font-medium text-[#12132dcc]">Author: ${post.author.name}</h4>
            </div>
            <!-- child-2-->
            <div class="mt-2 lg:mt-3">
            <!--  post Title   -->
                <h2 id="post-title" class="text-lg lg:text-xl font-bold text-[#12132D]">${post.title}</h2>
                <p class="text-sm lg:text-base font-normal text-[#12132d99] border-dashed border-b-2 py-3 lg:py-4">${post.description}</p>
            </div>
            <!-- child-3-->
            <div class="flex justify-between mt-3 lg:mt-5">
                <div class="flex gap-5 lg:gap-8">
                    <div class="flex items-center gap-2">
                        <img class="h-5 w-5" src="icon/sms.png" alt="">
                        <p class="text-base font-normal text-[#12132d99]">${post.comment_count}</p>
                    </div>
                    <!--  view-count   -->
                    <div id="view-count" class="flex items-center gap-1">
                        <img class="h-5 w-6" src="icon/eye.png" alt="">
                        <p class="text-base font-normal text-[#12132d99]">${post.view_count}</p>
                    </div>
                    <div class="flex items-center gap-1">
                        <img class="h-5 w-5" src="icon/view.png" alt="">
                        <p class="text-base font-normal text-[#12132d99]">${post.posted_time} min</p>
                    </div>
                </div>
                <div>
                    <!-- ------------ -->
                    <button onclick="postButton()" class="post-button">
                        <img src="icon/message.png" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
        `;
        postContainer.appendChild(postCard);
        
    })
    // text Inject niye kaj
    const postButton = document.getElementsByClassName('post-button');
    let count = 0;
    for(let i = 0; i< postButton.length; i++){
        const bttn = postButton[i]
        // console.log(bttn);
        bttn.addEventListener('click',function(event){
            count++;
            document.getElementById('card-count').innerText = count;
            // const postTitle = event.target.parentNode.parentNode.parentNode. parentNode.childNodes[7].childNodes[3].innerText;

            const titleContainer = document.getElementById('title-container');
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-between bg-white rounded-2xl my-4 p-4">
                                <h2 class="text-base font-bold text-[#12132D]">10 Kids Unaware of Their <br> Halloween Costume</h2>
                            <div class="flex items-center gap-1">
                                <img class="h-[18px] w-7" src="icon/eye.png" alt="">
                                <p class="text-base font-normal text-[#12132d99]">1,568</p>
                            </div>
                            </div>
            `;

            titleContainer.appendChild(div);

        })
    }

}
loadAllData()

const loadLetestPosts = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
    displayLetestPosts(data)
}
const displayLetestPosts = (letestPosts) =>{
    
    const letestPostContainer = document.getElementById('letestPost-container');

    letestPosts.forEach((ltstPost) =>{
    const letestPostCard = document.createElement('div');
    letestPostCard.innerHTML = `
    <div class="bg-base-100 shadow-xl p-5 rounded-3xl">
    <figure><img class="rounded-[20px]" src="${ltstPost.cover_image}" alt="Shoes" /></figure>
        <div class="mt-5 space-y-4">
            <div class="flex gap-2">
                <img src="icon/date.png" alt="">
                <h4 class="text-base font-normal text-[#12132d99]">${ltstPost?.author?.posted_date}</h4>
            </div>
          <h2 class="text-lg font-extrabold text-[#12132D]">${ltstPost.title}</h2>
          <p class="text-base font-normal text-[#12132d99]">${ltstPost.description.slice(0,85)}</p>
          <div class="card-actions">
            <img class="h-12 w-12 rounded-full" src="${ltstPost.profile_image}" alt="">
            <div>
                <h4 class="text-base font-bold text-[#12132D]">${ltstPost?.author?.name}</h4>
                <p class="text-sm font-normal text-[#12132d99]">${ltstPost?.author?.designation}</p>
            </div>
          </div>
        </div>
        </div>
        `;
        letestPostContainer.appendChild(letestPostCard)
    })
}
loadLetestPosts();
