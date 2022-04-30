////////////////////////////////
////////////////////////////////
////////////////////////////////
Git 原理流程


當前工作目錄( working directory )

$ git add

索引區( staging area )

$ git commit 

本地庫( Local Repository )

$ git push 

遠端數據庫( Remote Repository ) 


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


Git 簡指令
單一檔案加入索引：git add <檔案名稱>
所有檔案加入索引：git add .
提交版本：git commit -m "填寫版本資訊"
觀看當前狀態：git status
瀏覽歷史紀錄：git log

////////////////////////////////
////////////////////////////////

git :版本控制系統 --免費

"記錄各版本的差異"

當你為軟體追加一個新功能時，可能會同時在許多檔案的不同地方修改程式碼，
所有的程式碼都修改到位之後，軟體才會出現有意義的版本差異，
在版本控制系統中，稱呼這組更動為 "commit，"
代表你在這次更動中提交的程式碼。


針對你正在開發的專案，版本記錄系統會追蹤每次 "commit" 的：

	01更動前 v.s. 更動後的程式碼
	02修改者
	03修改時間
	04修改原因（修改者需要自行撰寫 "commit message"）


另外，版本控制系統的記錄是以'「行」'為單位，
追蹤同一個檔案裡每一行程式碼的更動歷史。
這樣工程師才能對具體的程式碼進行討論。
例如以下是 "Movielist" 專案裡的某一次 "commit" 記錄：

"切換版本"
當新版程式出現了錯誤，版本控制系統也可以非常快速地還原至舊版本：

回滾 ("rollback") 指的是「回復到上一個版本」，
這個術語在資料庫管理中很常出現

"利用分支同時開發不同功能"
版本控制也可以使用「分支 ("branch")」和「合併 ("merge")」的技巧，
讓開發者們能同時開發多個系統和功能，
但在各自工作時，彼此之間的程式碼不會互相干擾。

舉例來說，可能你的網站已經正式對外營運，主線 ("master") 上是營運中的穩定版本，
而開發團隊繼續在分支上開發新功能，直到功能測試完畢後，
才合併到分支上，成為使用者體驗的一部分。

下圖是某個專案的版本控制軟體截圖，
在線圖上每一個點都是一個 "commit" (意即一組程式碼更動)，
其中分支 feature/payment 是一個獨立功能，
負責的工程師在這個分支上持續開發，
直到功能測試完成了，才整併("merge")到 dev 分支上；
而 dev 這個分支分支 ("branch")又可能代表整個開發中的產品：

//////////////////////////
分支要怎麼設計是由團隊決定的，在合作開發的時候，需要與協作者講定這些分支策略。
明確的工作流程 ("workflow")版本控制系統讓工程師能夠協作開發並且充分交流，同時，使用版本控制系統把程式碼交流給其他人有明確的流程，遵守這套流程，甚至文化，是工程師的基本素養。

因應不同的情境，每家公司可能都有不同的分支管理策略，例如開源專案或內部專案可能有不同的分支需求，
經典的工作流程如 "Git flow" 和 "GitHub flow" 是常被討論的案例。
在目前的學習階段，由於暫時不會遇到大型專案，你還不需要煩腦版本控制的協作功能，然而，建議你開始使用版本控制的基本功能來管理自己的程式碼，從現在開始建立使用版本控制的習慣。
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

"版本控制系統：Git"

Git 是一套免費、開源、且有許多人使用的版本控制軟體
市面上也有許多以 Git 為核心技術基礎的雲端服務平台，例如 "GitHub"、GitLab、Bitbucket，


01"安裝 Git" Install--

02"設定 Git 使用者名稱和信箱"

$ git config --global user.name "your name"   //# Please enter your name
$ git config --global user.email "your email"  //# Please enter your email


C:\Users\kimki>git config --global user.name "MartinSOS"
C:\Users\kimki>git config --global user.email "myMail"

請使用以下指令確認輸入的資料是否正確：

$ git config --list

這行指令會列出目前的設定，若設定成功，其中應該會出現：

user.name= [your_username]
user.email= [your_email@email.com]



C:\Users\kimki>git config --list

diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager-core
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.name=MartinSOS
user.email=myMail
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true

////////////////////////////////////////////////////

03"提交程式碼：git commit"

現在要用 Git 來管理程式碼。在開始前，
$ 請確認你的指令列的目錄要先進入"練習用的資料夾位置"下：

C:\Users\kimki\OneDrive\桌面\testgitt>


$ git init    //// 啟用 repo庫

請使用以下指令確認資料夾內有一個名為 ".git"的資料夾，表示登記成功：



////////////////////////////////////////////////////

~testgitt $ git status
--------
	On branch master
	No commits yet
	Untracked files:
	  (use "git add <file>..." to include in what will be committed)
	        Memo4git01.js

	nothing added to commit but untracked files present (use "git add" to track)

////////////////////////////////////////////////////




這段訊息告知了幾件事：

a01 你目前的位址在 master 這條分支上 (關於分支，我們暫時不深入解釋)
a02 還沒有任何的提交 (commit)
a03 還沒列入追蹤的檔案有 Memo4git01.js，

請你用 git add <file> ... 指令來加入想提交的檔案</file>

////////////////////////////////////////////////////

Git 已經告訴你需要做什麼了，接下來我們會順著它的指示來提交程式碼。 "commit"
在過程中，若你搞不清楚自己在哪一個步驟，
隨時都可以停下來使用 "git status"，看看會有什麼訊息或建議跑出來。

////////////////////////////////////////////////////

提交程式碼
現在我們要將 Memo4git01.js檔案提交到 Git repository 裡，這個流程需要兩道指令：

~testgitt $ git add , $ git commit ;

////////////////////////////////////////////////////

~testgitt $ git add Memo4git01.js OR 
~testgitt $ git add .

----------
	On branch master
	No commits yet
	Changes to be committed:
	  (use "git rm --cached <file>..." to unstage)
	        new file:   Memo4git01.js


////////////////////////////////////////////////////
你會看見檔案名稱變成綠色，而且提示改成「Changes to be committed」，
表示檔案已經位在 staging area，準備送進 repository。
////////////////////////////////////////////////////

$ git commit -m "<填寫上傳版本資訊>"

$ git commit -m "create file_1"

$ git status

	On branch master
	Changes not staged for commit:
	  (use "git add <file>..." to update what will be committed)
	  (use "git restore <file>..." to discard changes in working directory)
	        modified:   Memo4git01.js

	no changes added to commit (use "git add" and/or "git commit -a")


$ git log

C:\Users\kimki\OneDrive\桌面\testgitt>git log
commit 4bdc8d5a8dee8a90823c997e5406414d4fd3628a (HEAD -> master)
Author: MartinSOS <myMail>
Date:   Sat Apr 30 13:54:40 2022 +0800

    create file_1 "新增版本資訊"



////////////////////////////////////////////////////

@ 接下來換您新增一個版本

這裡我簡化本篇流程：

開新資料夾，git init 建立數據庫
新增一個 Memo4git01.js 檔案
加入索引：git add .
提交版本：git commit -m "新增memo筆記"
觀看歷史紀錄：git log，並會看到一個版本紀錄

那麼該如何新增第二個版本紀錄呢？
因為我們已經新增好數據庫了，所以已經不需要再新增一次，推薦步驟如下：

新增一個 all.css，並編輯index.html，插入該 CSS
全部加入索引：git add .
提交版本：git commit -m "插入其他新增檔案:scss.html"
最後你可以再透過 git log 觀看是否數據庫裡面會有兩個版本。


C:\Users\kimki\OneDrive\桌面\testgitt>git add .

C:\Users\kimki\OneDrive\桌面\testgitt>git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   Memo4git01.js
        new file:   all.css
        new file:   newsty.scss
        new file:   scss.html


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////