/*
 * zxxFile.js 鍩轰簬HTML5 鏂囦欢涓婁紶鐨勬牳蹇冭剼鏈� http://www.zhangxinxu.com/wordpress/?p=1923
 * by zhangxinxu 2011-09-12
 */

var ZXXFILE = {
    fileInput: null, //html file鎺т欢
    dragDrop: null, //鎷栨嫿鏁忔劅鍖哄煙
    upButton: null, //鎻愪氦鎸夐挳
    url: "", //ajax鍦板潃
    fileFilter: [], //杩囨护鍚庣殑鏂囦欢鏁扮粍
    filter: function(files) { //閫夋嫨鏂囦欢缁勭殑杩囨护鏂规硶
        return files;
    },
    onSelect: function() {}, //鏂囦欢閫夋嫨鍚�
    onDelete: function() {}, //鏂囦欢鍒犻櫎鍚�
    onDragOver: function() {}, //鏂囦欢鎷栨嫿鍒版晱鎰熷尯鍩熸椂
    onDragLeave: function() {}, //鏂囦欢绂诲紑鍒版晱鎰熷尯鍩熸椂
    onProgress: function() {}, //鏂囦欢涓婁紶杩涘害
    onSuccess: function() {}, //鏂囦欢涓婁紶鎴愬姛鏃�
    onFailure: function() {}, //鏂囦欢涓婁紶澶辫触鏃�,
    onComplete: function() {}, //鏂囦欢鍏ㄩ儴涓婁紶瀹屾瘯鏃�

    /* 寮€鍙戝弬鏁板拰鍐呯疆鏂规硶鍒嗙晫绾� */

    //鏂囦欢鎷栨斁
    funDragHover: function(e) {
        e.stopPropagation();
        e.preventDefault();
        this[e.type === "dragover" ? "onDragOver" : "onDragLeave"].call(e.target);
        return this;
    },
    //鑾峰彇閫夋嫨鏂囦欢锛宖ile鎺т欢鎴栨嫋鏀�
    funGetFiles: function(e) {
        // 鍙栨秷榧犳爣缁忚繃鏍峰紡
        this.funDragHover(e);

        // 鑾峰彇鏂囦欢鍒楄〃瀵硅薄
        var files = e.target.files || e.dataTransfer.files;
        //缁х画娣诲姞鏂囦欢
        this.fileFilter = this.fileFilter.concat(this.filter(files));
        this.funDealFiles();
        return this;
    },

    //閫変腑鏂囦欢鐨勫鐞嗕笌鍥炶皟
    funDealFiles: function() {
        for (var i = 0, file; file = this.fileFilter[i]; i++) {
            //澧炲姞鍞竴绱㈠紩鍊�
            file.index = i;
        }
        //鎵ц閫夋嫨鍥炶皟
        this.onSelect(this.fileFilter);
        return this;
    },

    //鍒犻櫎瀵瑰簲鐨勬枃浠�
    funDeleteFile: function(fileDelete) {
        var arrFile = [];
        for (var i = 0, file; file = this.fileFilter[i]; i++) {
            if (file != fileDelete) {
                arrFile.push(file);
            } else {
                this.onDelete(fileDelete);
            }
        }
        this.fileFilter = arrFile;
        return this;
    },

    //鏂囦欢涓婁紶
    funUploadFile: function() {
        var self = this;
        if (location.host.indexOf("sitepointstatic") >= 0) {
            //闈炵珯鐐规湇鍔″櫒涓婅繍琛�
            return;
        }
        for (var i = 0, file; file = this.fileFilter[i]; i++) {
            (function(file) {
                var xhr = new XMLHttpRequest();
                if (xhr.upload) {
                    // 涓婁紶涓�
                    xhr.upload.addEventListener("progress", function(e) {
                        self.onProgress(file, e.loaded, e.total);
                    }, false);

                    // 鏂囦欢涓婁紶鎴愬姛鎴栨槸澶辫触
                    xhr.onreadystatechange = function(e) {
                        if (xhr.readyState == 4) {
                            if (xhr.status == 200) {
                                self.onSuccess(file, xhr.responseText);
                                self.funDeleteFile(file);
                                if (!self.fileFilter.length) {
                                    //鍏ㄩ儴瀹屾瘯
                                    self.onComplete();
                                }
                            } else {
                                self.onFailure(file, xhr.responseText);
                            }
                        }
                    };

                    // 寮€濮嬩笂浼�
                    xhr.open("POST", self.url, true);
                    xhr.setRequestHeader("X_FILENAME", encodeURIComponent(file.name));
                    xhr.send(file);
                }
            })(file);
        }

    },

    init: function() {
        var self = this;

        if (this.dragDrop) {
            this.dragDrop.addEventListener("dragover", function(e) { self.funDragHover(e); }, false);
            this.dragDrop.addEventListener("dragleave", function(e) { self.funDragHover(e); }, false);
            this.dragDrop.addEventListener("drop", function(e) { self.funGetFiles(e); }, false);
        }

        //鏂囦欢閫夋嫨鎺т欢閫夋嫨
        if (this.fileInput) {
            this.fileInput.addEventListener("change", function(e) { self.funGetFiles(e); }, false);
        }

        //涓婁紶鎸夐挳鎻愪氦
        if (this.upButton) {
            this.upButton.addEventListener("click", function(e) { self.funUploadFile(e); }, false);
        }
    }
};