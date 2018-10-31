
//自定义http请求

function obj() {

    this._httpData = function (Vue, usr, condition) {


        var timeoutmid = 15000;

        var postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
            timeout: timeoutmid
        };
        var _this = this;
        Vue.$http.post(process.env.API_HOST + usr,
            { condition },
            { postCfg }
        ).then(response => {
            console.log(response);

            if (response.data && response.data.length && response.data.length >= 0) {
                this.datas = response.data
                this.state = true;
                this.message = response.data.message ? response.data.message : '操作成功'
            } else {
                this.datas = [];
                this.state = false;
                this.message = response.data.message ? response.data.message : '操作失败'
            }
            _this.then();
        }, function (error) {
            this.datas = [];
            this.state = false;
            this.message = '网络异常';
            this.reason = error.response.data;
            _this.then();
            
        });
        
        return this;
    };
    /**
     * 回调函数
     */
    this.then = function(){
     
    }

    this._httpPost = function (Vue, usr, condition) {

        var timeoutmid = 15000;
        var postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
            timeout: timeoutmid
        };
        return Vue.$http.post(process.env.API_HOST + usr, { condition },{ postCfg }
        )
    };
}

export default new obj;









