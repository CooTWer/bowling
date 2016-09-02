

function Round(firstTry,secondTry){
    this.firstTry = firstTry;
    this.secondTry = secondTry;
    this.firstMultiple = 1;
    this.secondMultiple = 1;
}

Round.prototype = {
     frame : 0,
     sum : 0,
     extra1 : 0,
     extra2 : 0,
     extra3 : 0,
     statistic : function(){
        if(frame != 9){
            if(this.first_try + this.second_try < 10){
                add();
                continue;
            }
            else if(this.first_try + this.second_try == 10 && this.first_try != 10){
                extra1++;
            }
            else if(this.first_try + this.second_try == 10 && this.first_try == 10){
                if(obj[i+1][0] != 10){
                    flag[i+1][0]++;
                    flag[i+1][1]++;
                }
                else{
                    if(i!=8){
                        flag[i+1][0]++;
                        flag[i+2][0]++;
                    }
                    else{
                        flag[9][0]++;
                        flag[9][1]++;
                    }
                }
            }
        }
     },
     add : function(){
        var tempSum = this.firstTry * (this.secondMultiple + extra1) + this.secondTry * (this.secondMultiple + extra2);
        sum += tempSum;
     }

}
