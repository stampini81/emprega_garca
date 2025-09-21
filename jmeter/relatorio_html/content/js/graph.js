/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 277.0, "minX": 0.0, "maxY": 3493.0, "series": [{"data": [[0.0, 277.0], [0.1, 279.0], [0.2, 282.0], [0.3, 283.0], [0.4, 284.0], [0.5, 286.0], [0.6, 287.0], [0.7, 287.0], [0.8, 288.0], [0.9, 289.0], [1.0, 290.0], [1.1, 291.0], [1.2, 291.0], [1.3, 292.0], [1.4, 292.0], [1.5, 293.0], [1.6, 293.0], [1.7, 294.0], [1.8, 294.0], [1.9, 295.0], [2.0, 295.0], [2.1, 296.0], [2.2, 296.0], [2.3, 296.0], [2.4, 297.0], [2.5, 297.0], [2.6, 298.0], [2.7, 298.0], [2.8, 298.0], [2.9, 298.0], [3.0, 299.0], [3.1, 300.0], [3.2, 300.0], [3.3, 300.0], [3.4, 300.0], [3.5, 300.0], [3.6, 301.0], [3.7, 301.0], [3.8, 302.0], [3.9, 302.0], [4.0, 303.0], [4.1, 303.0], [4.2, 304.0], [4.3, 304.0], [4.4, 304.0], [4.5, 304.0], [4.6, 304.0], [4.7, 305.0], [4.8, 305.0], [4.9, 305.0], [5.0, 306.0], [5.1, 306.0], [5.2, 306.0], [5.3, 307.0], [5.4, 307.0], [5.5, 307.0], [5.6, 307.0], [5.7, 308.0], [5.8, 308.0], [5.9, 309.0], [6.0, 309.0], [6.1, 309.0], [6.2, 310.0], [6.3, 310.0], [6.4, 310.0], [6.5, 311.0], [6.6, 311.0], [6.7, 311.0], [6.8, 312.0], [6.9, 312.0], [7.0, 312.0], [7.1, 312.0], [7.2, 313.0], [7.3, 313.0], [7.4, 313.0], [7.5, 314.0], [7.6, 314.0], [7.7, 314.0], [7.8, 315.0], [7.9, 315.0], [8.0, 315.0], [8.1, 316.0], [8.2, 316.0], [8.3, 316.0], [8.4, 317.0], [8.5, 317.0], [8.6, 317.0], [8.7, 318.0], [8.8, 318.0], [8.9, 319.0], [9.0, 319.0], [9.1, 319.0], [9.2, 319.0], [9.3, 319.0], [9.4, 320.0], [9.5, 320.0], [9.6, 320.0], [9.7, 321.0], [9.8, 321.0], [9.9, 321.0], [10.0, 322.0], [10.1, 322.0], [10.2, 322.0], [10.3, 323.0], [10.4, 323.0], [10.5, 323.0], [10.6, 323.0], [10.7, 324.0], [10.8, 324.0], [10.9, 324.0], [11.0, 324.0], [11.1, 325.0], [11.2, 325.0], [11.3, 325.0], [11.4, 326.0], [11.5, 326.0], [11.6, 326.0], [11.7, 326.0], [11.8, 327.0], [11.9, 327.0], [12.0, 327.0], [12.1, 327.0], [12.2, 327.0], [12.3, 328.0], [12.4, 328.0], [12.5, 328.0], [12.6, 329.0], [12.7, 329.0], [12.8, 329.0], [12.9, 330.0], [13.0, 330.0], [13.1, 330.0], [13.2, 330.0], [13.3, 330.0], [13.4, 331.0], [13.5, 331.0], [13.6, 332.0], [13.7, 332.0], [13.8, 332.0], [13.9, 333.0], [14.0, 333.0], [14.1, 333.0], [14.2, 334.0], [14.3, 334.0], [14.4, 334.0], [14.5, 334.0], [14.6, 335.0], [14.7, 335.0], [14.8, 335.0], [14.9, 335.0], [15.0, 335.0], [15.1, 336.0], [15.2, 336.0], [15.3, 336.0], [15.4, 336.0], [15.5, 337.0], [15.6, 337.0], [15.7, 337.0], [15.8, 337.0], [15.9, 338.0], [16.0, 338.0], [16.1, 338.0], [16.2, 338.0], [16.3, 338.0], [16.4, 339.0], [16.5, 339.0], [16.6, 339.0], [16.7, 340.0], [16.8, 340.0], [16.9, 340.0], [17.0, 340.0], [17.1, 341.0], [17.2, 341.0], [17.3, 341.0], [17.4, 341.0], [17.5, 341.0], [17.6, 341.0], [17.7, 342.0], [17.8, 342.0], [17.9, 342.0], [18.0, 343.0], [18.1, 343.0], [18.2, 343.0], [18.3, 343.0], [18.4, 344.0], [18.5, 344.0], [18.6, 344.0], [18.7, 344.0], [18.8, 345.0], [18.9, 345.0], [19.0, 345.0], [19.1, 345.0], [19.2, 346.0], [19.3, 346.0], [19.4, 346.0], [19.5, 346.0], [19.6, 346.0], [19.7, 347.0], [19.8, 347.0], [19.9, 347.0], [20.0, 347.0], [20.1, 347.0], [20.2, 348.0], [20.3, 348.0], [20.4, 348.0], [20.5, 348.0], [20.6, 348.0], [20.7, 349.0], [20.8, 349.0], [20.9, 349.0], [21.0, 349.0], [21.1, 350.0], [21.2, 350.0], [21.3, 350.0], [21.4, 350.0], [21.5, 351.0], [21.6, 351.0], [21.7, 351.0], [21.8, 351.0], [21.9, 351.0], [22.0, 351.0], [22.1, 352.0], [22.2, 352.0], [22.3, 352.0], [22.4, 352.0], [22.5, 353.0], [22.6, 353.0], [22.7, 353.0], [22.8, 353.0], [22.9, 354.0], [23.0, 354.0], [23.1, 354.0], [23.2, 354.0], [23.3, 355.0], [23.4, 355.0], [23.5, 355.0], [23.6, 355.0], [23.7, 355.0], [23.8, 356.0], [23.9, 356.0], [24.0, 356.0], [24.1, 357.0], [24.2, 357.0], [24.3, 357.0], [24.4, 357.0], [24.5, 357.0], [24.6, 358.0], [24.7, 358.0], [24.8, 358.0], [24.9, 358.0], [25.0, 358.0], [25.1, 359.0], [25.2, 359.0], [25.3, 359.0], [25.4, 359.0], [25.5, 359.0], [25.6, 360.0], [25.7, 360.0], [25.8, 360.0], [25.9, 360.0], [26.0, 361.0], [26.1, 361.0], [26.2, 361.0], [26.3, 361.0], [26.4, 361.0], [26.5, 362.0], [26.6, 362.0], [26.7, 362.0], [26.8, 362.0], [26.9, 363.0], [27.0, 363.0], [27.1, 363.0], [27.2, 363.0], [27.3, 364.0], [27.4, 364.0], [27.5, 364.0], [27.6, 364.0], [27.7, 364.0], [27.8, 365.0], [27.9, 365.0], [28.0, 365.0], [28.1, 365.0], [28.2, 366.0], [28.3, 366.0], [28.4, 366.0], [28.5, 366.0], [28.6, 366.0], [28.7, 367.0], [28.8, 367.0], [28.9, 367.0], [29.0, 367.0], [29.1, 367.0], [29.2, 367.0], [29.3, 368.0], [29.4, 368.0], [29.5, 368.0], [29.6, 368.0], [29.7, 368.0], [29.8, 369.0], [29.9, 369.0], [30.0, 369.0], [30.1, 369.0], [30.2, 369.0], [30.3, 369.0], [30.4, 369.0], [30.5, 370.0], [30.6, 370.0], [30.7, 370.0], [30.8, 370.0], [30.9, 371.0], [31.0, 371.0], [31.1, 371.0], [31.2, 371.0], [31.3, 371.0], [31.4, 372.0], [31.5, 372.0], [31.6, 372.0], [31.7, 372.0], [31.8, 373.0], [31.9, 373.0], [32.0, 373.0], [32.1, 373.0], [32.2, 374.0], [32.3, 374.0], [32.4, 374.0], [32.5, 374.0], [32.6, 375.0], [32.7, 375.0], [32.8, 375.0], [32.9, 375.0], [33.0, 375.0], [33.1, 376.0], [33.2, 376.0], [33.3, 376.0], [33.4, 376.0], [33.5, 376.0], [33.6, 377.0], [33.7, 377.0], [33.8, 377.0], [33.9, 377.0], [34.0, 378.0], [34.1, 378.0], [34.2, 378.0], [34.3, 378.0], [34.4, 379.0], [34.5, 379.0], [34.6, 379.0], [34.7, 379.0], [34.8, 379.0], [34.9, 380.0], [35.0, 380.0], [35.1, 380.0], [35.2, 380.0], [35.3, 381.0], [35.4, 381.0], [35.5, 381.0], [35.6, 381.0], [35.7, 382.0], [35.8, 382.0], [35.9, 382.0], [36.0, 382.0], [36.1, 382.0], [36.2, 383.0], [36.3, 383.0], [36.4, 383.0], [36.5, 383.0], [36.6, 384.0], [36.7, 384.0], [36.8, 384.0], [36.9, 384.0], [37.0, 384.0], [37.1, 385.0], [37.2, 385.0], [37.3, 385.0], [37.4, 385.0], [37.5, 386.0], [37.6, 386.0], [37.7, 386.0], [37.8, 386.0], [37.9, 387.0], [38.0, 387.0], [38.1, 387.0], [38.2, 387.0], [38.3, 387.0], [38.4, 387.0], [38.5, 388.0], [38.6, 388.0], [38.7, 388.0], [38.8, 388.0], [38.9, 389.0], [39.0, 389.0], [39.1, 389.0], [39.2, 390.0], [39.3, 390.0], [39.4, 390.0], [39.5, 390.0], [39.6, 391.0], [39.7, 391.0], [39.8, 391.0], [39.9, 392.0], [40.0, 392.0], [40.1, 392.0], [40.2, 393.0], [40.3, 393.0], [40.4, 393.0], [40.5, 393.0], [40.6, 394.0], [40.7, 394.0], [40.8, 394.0], [40.9, 394.0], [41.0, 394.0], [41.1, 395.0], [41.2, 395.0], [41.3, 395.0], [41.4, 395.0], [41.5, 396.0], [41.6, 396.0], [41.7, 396.0], [41.8, 396.0], [41.9, 396.0], [42.0, 397.0], [42.1, 397.0], [42.2, 397.0], [42.3, 397.0], [42.4, 398.0], [42.5, 398.0], [42.6, 398.0], [42.7, 398.0], [42.8, 398.0], [42.9, 398.0], [43.0, 399.0], [43.1, 399.0], [43.2, 399.0], [43.3, 399.0], [43.4, 400.0], [43.5, 400.0], [43.6, 400.0], [43.7, 400.0], [43.8, 400.0], [43.9, 401.0], [44.0, 401.0], [44.1, 401.0], [44.2, 401.0], [44.3, 402.0], [44.4, 402.0], [44.5, 402.0], [44.6, 402.0], [44.7, 403.0], [44.8, 403.0], [44.9, 403.0], [45.0, 403.0], [45.1, 403.0], [45.2, 404.0], [45.3, 404.0], [45.4, 404.0], [45.5, 405.0], [45.6, 405.0], [45.7, 405.0], [45.8, 406.0], [45.9, 406.0], [46.0, 406.0], [46.1, 407.0], [46.2, 407.0], [46.3, 407.0], [46.4, 407.0], [46.5, 407.0], [46.6, 408.0], [46.7, 408.0], [46.8, 408.0], [46.9, 409.0], [47.0, 409.0], [47.1, 409.0], [47.2, 409.0], [47.3, 409.0], [47.4, 410.0], [47.5, 410.0], [47.6, 410.0], [47.7, 410.0], [47.8, 410.0], [47.9, 410.0], [48.0, 411.0], [48.1, 411.0], [48.2, 411.0], [48.3, 411.0], [48.4, 411.0], [48.5, 412.0], [48.6, 412.0], [48.7, 412.0], [48.8, 412.0], [48.9, 413.0], [49.0, 413.0], [49.1, 413.0], [49.2, 414.0], [49.3, 414.0], [49.4, 414.0], [49.5, 414.0], [49.6, 414.0], [49.7, 415.0], [49.8, 415.0], [49.9, 416.0], [50.0, 416.0], [50.1, 416.0], [50.2, 416.0], [50.3, 417.0], [50.4, 417.0], [50.5, 417.0], [50.6, 417.0], [50.7, 417.0], [50.8, 418.0], [50.9, 418.0], [51.0, 418.0], [51.1, 418.0], [51.2, 419.0], [51.3, 419.0], [51.4, 419.0], [51.5, 419.0], [51.6, 420.0], [51.7, 420.0], [51.8, 420.0], [51.9, 420.0], [52.0, 421.0], [52.1, 421.0], [52.2, 421.0], [52.3, 421.0], [52.4, 422.0], [52.5, 422.0], [52.6, 422.0], [52.7, 422.0], [52.8, 423.0], [52.9, 423.0], [53.0, 423.0], [53.1, 423.0], [53.2, 424.0], [53.3, 424.0], [53.4, 424.0], [53.5, 424.0], [53.6, 425.0], [53.7, 425.0], [53.8, 425.0], [53.9, 425.0], [54.0, 426.0], [54.1, 426.0], [54.2, 426.0], [54.3, 426.0], [54.4, 426.0], [54.5, 427.0], [54.6, 427.0], [54.7, 427.0], [54.8, 428.0], [54.9, 428.0], [55.0, 428.0], [55.1, 429.0], [55.2, 429.0], [55.3, 429.0], [55.4, 429.0], [55.5, 430.0], [55.6, 430.0], [55.7, 430.0], [55.8, 430.0], [55.9, 431.0], [56.0, 431.0], [56.1, 431.0], [56.2, 431.0], [56.3, 432.0], [56.4, 432.0], [56.5, 432.0], [56.6, 432.0], [56.7, 433.0], [56.8, 433.0], [56.9, 434.0], [57.0, 434.0], [57.1, 434.0], [57.2, 434.0], [57.3, 435.0], [57.4, 435.0], [57.5, 435.0], [57.6, 435.0], [57.7, 436.0], [57.8, 436.0], [57.9, 436.0], [58.0, 437.0], [58.1, 437.0], [58.2, 437.0], [58.3, 438.0], [58.4, 438.0], [58.5, 438.0], [58.6, 438.0], [58.7, 438.0], [58.8, 439.0], [58.9, 439.0], [59.0, 439.0], [59.1, 440.0], [59.2, 440.0], [59.3, 440.0], [59.4, 440.0], [59.5, 441.0], [59.6, 441.0], [59.7, 442.0], [59.8, 442.0], [59.9, 442.0], [60.0, 442.0], [60.1, 442.0], [60.2, 443.0], [60.3, 443.0], [60.4, 443.0], [60.5, 444.0], [60.6, 444.0], [60.7, 444.0], [60.8, 444.0], [60.9, 445.0], [61.0, 445.0], [61.1, 445.0], [61.2, 446.0], [61.3, 446.0], [61.4, 446.0], [61.5, 447.0], [61.6, 447.0], [61.7, 447.0], [61.8, 447.0], [61.9, 447.0], [62.0, 448.0], [62.1, 448.0], [62.2, 448.0], [62.3, 449.0], [62.4, 449.0], [62.5, 449.0], [62.6, 450.0], [62.7, 450.0], [62.8, 450.0], [62.9, 450.0], [63.0, 451.0], [63.1, 451.0], [63.2, 451.0], [63.3, 451.0], [63.4, 452.0], [63.5, 452.0], [63.6, 452.0], [63.7, 453.0], [63.8, 453.0], [63.9, 453.0], [64.0, 453.0], [64.1, 454.0], [64.2, 454.0], [64.3, 454.0], [64.4, 455.0], [64.5, 455.0], [64.6, 455.0], [64.7, 455.0], [64.8, 456.0], [64.9, 456.0], [65.0, 457.0], [65.1, 457.0], [65.2, 458.0], [65.3, 458.0], [65.4, 458.0], [65.5, 459.0], [65.6, 459.0], [65.7, 459.0], [65.8, 459.0], [65.9, 460.0], [66.0, 460.0], [66.1, 460.0], [66.2, 461.0], [66.3, 461.0], [66.4, 461.0], [66.5, 462.0], [66.6, 462.0], [66.7, 462.0], [66.8, 462.0], [66.9, 463.0], [67.0, 463.0], [67.1, 463.0], [67.2, 463.0], [67.3, 464.0], [67.4, 464.0], [67.5, 465.0], [67.6, 465.0], [67.7, 466.0], [67.8, 466.0], [67.9, 466.0], [68.0, 467.0], [68.1, 467.0], [68.2, 467.0], [68.3, 468.0], [68.4, 468.0], [68.5, 468.0], [68.6, 469.0], [68.7, 469.0], [68.8, 470.0], [68.9, 470.0], [69.0, 471.0], [69.1, 471.0], [69.2, 471.0], [69.3, 472.0], [69.4, 472.0], [69.5, 473.0], [69.6, 473.0], [69.7, 473.0], [69.8, 474.0], [69.9, 474.0], [70.0, 474.0], [70.1, 475.0], [70.2, 475.0], [70.3, 475.0], [70.4, 476.0], [70.5, 476.0], [70.6, 477.0], [70.7, 477.0], [70.8, 477.0], [70.9, 478.0], [71.0, 478.0], [71.1, 478.0], [71.2, 479.0], [71.3, 479.0], [71.4, 480.0], [71.5, 480.0], [71.6, 481.0], [71.7, 481.0], [71.8, 481.0], [71.9, 482.0], [72.0, 482.0], [72.1, 483.0], [72.2, 483.0], [72.3, 483.0], [72.4, 484.0], [72.5, 484.0], [72.6, 485.0], [72.7, 486.0], [72.8, 486.0], [72.9, 486.0], [73.0, 487.0], [73.1, 487.0], [73.2, 488.0], [73.3, 488.0], [73.4, 489.0], [73.5, 489.0], [73.6, 490.0], [73.7, 490.0], [73.8, 490.0], [73.9, 491.0], [74.0, 491.0], [74.1, 491.0], [74.2, 492.0], [74.3, 492.0], [74.4, 492.0], [74.5, 493.0], [74.6, 493.0], [74.7, 494.0], [74.8, 494.0], [74.9, 494.0], [75.0, 495.0], [75.1, 495.0], [75.2, 496.0], [75.3, 496.0], [75.4, 497.0], [75.5, 497.0], [75.6, 498.0], [75.7, 498.0], [75.8, 499.0], [75.9, 499.0], [76.0, 500.0], [76.1, 500.0], [76.2, 500.0], [76.3, 501.0], [76.4, 502.0], [76.5, 502.0], [76.6, 502.0], [76.7, 503.0], [76.8, 504.0], [76.9, 504.0], [77.0, 505.0], [77.1, 506.0], [77.2, 506.0], [77.3, 507.0], [77.4, 507.0], [77.5, 508.0], [77.6, 508.0], [77.7, 509.0], [77.8, 509.0], [77.9, 510.0], [78.0, 510.0], [78.1, 511.0], [78.2, 511.0], [78.3, 512.0], [78.4, 512.0], [78.5, 513.0], [78.6, 513.0], [78.7, 514.0], [78.8, 514.0], [78.9, 515.0], [79.0, 516.0], [79.1, 516.0], [79.2, 517.0], [79.3, 517.0], [79.4, 518.0], [79.5, 518.0], [79.6, 519.0], [79.7, 520.0], [79.8, 520.0], [79.9, 521.0], [80.0, 521.0], [80.1, 522.0], [80.2, 522.0], [80.3, 523.0], [80.4, 524.0], [80.5, 524.0], [80.6, 525.0], [80.7, 526.0], [80.8, 527.0], [80.9, 527.0], [81.0, 528.0], [81.1, 528.0], [81.2, 529.0], [81.3, 530.0], [81.4, 530.0], [81.5, 531.0], [81.6, 531.0], [81.7, 532.0], [81.8, 533.0], [81.9, 533.0], [82.0, 534.0], [82.1, 534.0], [82.2, 535.0], [82.3, 536.0], [82.4, 537.0], [82.5, 538.0], [82.6, 538.0], [82.7, 539.0], [82.8, 540.0], [82.9, 540.0], [83.0, 542.0], [83.1, 542.0], [83.2, 543.0], [83.3, 543.0], [83.4, 544.0], [83.5, 545.0], [83.6, 546.0], [83.7, 547.0], [83.8, 549.0], [83.9, 549.0], [84.0, 550.0], [84.1, 551.0], [84.2, 552.0], [84.3, 554.0], [84.4, 555.0], [84.5, 556.0], [84.6, 557.0], [84.7, 558.0], [84.8, 559.0], [84.9, 560.0], [85.0, 561.0], [85.1, 562.0], [85.2, 563.0], [85.3, 564.0], [85.4, 564.0], [85.5, 565.0], [85.6, 567.0], [85.7, 568.0], [85.8, 569.0], [85.9, 571.0], [86.0, 573.0], [86.1, 575.0], [86.2, 575.0], [86.3, 577.0], [86.4, 578.0], [86.5, 579.0], [86.6, 581.0], [86.7, 582.0], [86.8, 583.0], [86.9, 585.0], [87.0, 586.0], [87.1, 587.0], [87.2, 589.0], [87.3, 590.0], [87.4, 593.0], [87.5, 595.0], [87.6, 596.0], [87.7, 598.0], [87.8, 600.0], [87.9, 601.0], [88.0, 602.0], [88.1, 603.0], [88.2, 605.0], [88.3, 606.0], [88.4, 608.0], [88.5, 612.0], [88.6, 617.0], [88.7, 620.0], [88.8, 622.0], [88.9, 624.0], [89.0, 628.0], [89.1, 631.0], [89.2, 636.0], [89.3, 643.0], [89.4, 646.0], [89.5, 649.0], [89.6, 653.0], [89.7, 657.0], [89.8, 661.0], [89.9, 664.0], [90.0, 668.0], [90.1, 672.0], [90.2, 677.0], [90.3, 680.0], [90.4, 684.0], [90.5, 689.0], [90.6, 702.0], [90.7, 709.0], [90.8, 716.0], [90.9, 728.0], [91.0, 742.0], [91.1, 753.0], [91.2, 766.0], [91.3, 776.0], [91.4, 796.0], [91.5, 825.0], [91.6, 837.0], [91.7, 848.0], [91.8, 881.0], [91.9, 897.0], [92.0, 926.0], [92.1, 945.0], [92.2, 956.0], [92.3, 963.0], [92.4, 980.0], [92.5, 1000.0], [92.6, 1012.0], [92.7, 1032.0], [92.8, 1044.0], [92.9, 1065.0], [93.0, 1078.0], [93.1, 1097.0], [93.2, 1111.0], [93.3, 1127.0], [93.4, 1143.0], [93.5, 1178.0], [93.6, 1201.0], [93.7, 1211.0], [93.8, 1238.0], [93.9, 1255.0], [94.0, 1270.0], [94.1, 1295.0], [94.2, 1311.0], [94.3, 1329.0], [94.4, 1368.0], [94.5, 1384.0], [94.6, 1409.0], [94.7, 1433.0], [94.8, 1455.0], [94.9, 1477.0], [95.0, 1514.0], [95.1, 1541.0], [95.2, 1561.0], [95.3, 1586.0], [95.4, 1611.0], [95.5, 1629.0], [95.6, 1642.0], [95.7, 1660.0], [95.8, 1681.0], [95.9, 1688.0], [96.0, 1696.0], [96.1, 1708.0], [96.2, 1715.0], [96.3, 1725.0], [96.4, 1736.0], [96.5, 1748.0], [96.6, 1755.0], [96.7, 1770.0], [96.8, 1789.0], [96.9, 1794.0], [97.0, 1800.0], [97.1, 1806.0], [97.2, 1811.0], [97.3, 1818.0], [97.4, 1826.0], [97.5, 1839.0], [97.6, 1846.0], [97.7, 1859.0], [97.8, 1867.0], [97.9, 1880.0], [98.0, 1886.0], [98.1, 1896.0], [98.2, 1905.0], [98.3, 1911.0], [98.4, 1920.0], [98.5, 1930.0], [98.6, 1937.0], [98.7, 1943.0], [98.8, 1952.0], [98.9, 1963.0], [99.0, 1975.0], [99.1, 2003.0], [99.2, 2020.0], [99.3, 2035.0], [99.4, 2055.0], [99.5, 2090.0], [99.6, 2114.0], [99.7, 2163.0], [99.8, 2216.0], [99.9, 2353.0], [100.0, 3493.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 3160.0, "series": [{"data": [[2100.0, 18.0], [2300.0, 5.0], [2200.0, 8.0], [600.0, 222.0], [2400.0, 4.0], [700.0, 66.0], [200.0, 243.0], [800.0, 39.0], [3400.0, 1.0], [900.0, 45.0], [1000.0, 48.0], [1100.0, 39.0], [300.0, 3160.0], [1200.0, 43.0], [1300.0, 33.0], [1400.0, 31.0], [1500.0, 32.0], [400.0, 2567.0], [1600.0, 51.0], [1700.0, 76.0], [1800.0, 92.0], [1900.0, 74.0], [500.0, 924.0], [2000.0, 35.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 396.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5990.0, "series": [{"data": [[0.0, 5990.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1470.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 396.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.255639097744371, "minX": 1.75848546E12, "maxY": 10.0, "series": [{"data": [[1.75848582E12, 10.0], [1.75848564E12, 10.0], [1.75848546E12, 9.255639097744371], [1.75848576E12, 10.0], [1.75848558E12, 10.0], [1.75848588E12, 10.0], [1.7584857E12, 10.0], [1.75848552E12, 10.0]], "isOverall": false, "label": "Login Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75848588E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 306.5, "minX": 3.0, "maxY": 593.75, "series": [{"data": [[4.0, 352.8], [8.0, 319.84615384615387], [9.0, 334.6363636363636], [5.0, 339.14285714285717], [10.0, 518.1414828116966], [3.0, 593.75], [6.0, 306.5], [7.0, 318.41666666666663]], "isOverall": false, "label": "Login Request", "isController": false}, {"data": [[9.974796334012243, 516.8095723014249]], "isOverall": false, "label": "Login Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1183.7, "minX": 1.75848546E12, "maxY": 210952.93333333332, "series": [{"data": [[1.75848582E12, 147785.4], [1.75848564E12, 169827.46666666667], [1.75848546E12, 39350.26666666667], [1.75848576E12, 161099.4], [1.75848558E12, 183437.33333333334], [1.75848588E12, 89647.6], [1.7584857E12, 160063.86666666667], [1.75848552E12, 210952.93333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75848582E12, 4445.55], [1.75848564E12, 5108.6], [1.75848546E12, 1183.7], [1.75848576E12, 4846.05], [1.75848558E12, 5518.0], [1.75848588E12, 2696.7], [1.7584857E12, 4814.9], [1.75848552E12, 6345.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75848588E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 397.327067669173, "minX": 1.75848546E12, "maxY": 598.8658658658662, "series": [{"data": [[1.75848582E12, 598.8658658658662], [1.75848564E12, 516.0435540069682], [1.75848546E12, 397.327067669173], [1.75848576E12, 552.6225895316803], [1.75848558E12, 483.8911290322583], [1.75848588E12, 590.0627062706274], [1.7584857E12, 559.1774491682066], [1.75848552E12, 420.22650771388606]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75848588E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 393.1954887218041, "minX": 1.75848546E12, "maxY": 580.8465346534654, "series": [{"data": [[1.75848582E12, 578.9469469469469], [1.75848564E12, 510.39372822299663], [1.75848546E12, 393.1954887218041], [1.75848576E12, 538.3076216712589], [1.75848558E12, 471.9951612903232], [1.75848588E12, 580.8465346534654], [1.7584857E12, 551.8696857670976], [1.75848552E12, 408.4200561009819]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75848588E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.75848546E12, "maxY": 5.184210526315791, "series": [{"data": [[1.75848582E12, 0.3503503503503504], [1.75848564E12, 1.2526132404181172], [1.75848546E12, 5.184210526315791], [1.75848576E12, 0.49586776859504145], [1.75848558E12, 0.3548387096774195], [1.75848588E12, 0.0], [1.7584857E12, 0.38724584103512], [1.75848552E12, 0.42776998597475435]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75848588E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 277.0, "minX": 1.75848546E12, "maxY": 3493.0, "series": [{"data": [[1.75848582E12, 2361.0], [1.75848564E12, 1793.0], [1.75848546E12, 1019.0], [1.75848576E12, 2475.0], [1.75848558E12, 1520.0], [1.75848588E12, 2102.0], [1.7584857E12, 3493.0], [1.75848552E12, 1267.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75848582E12, 1750.0], [1.75848564E12, 1084.0000000000027], [1.75848546E12, 531.0], [1.75848576E12, 703.0], [1.75848558E12, 902.4000000000005], [1.75848588E12, 1738.0000000000014], [1.7584857E12, 807.9000000000012], [1.75848552E12, 560.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75848582E12, 2187.0], [1.75848564E12, 1644.55], [1.75848546E12, 650.9299999999996], [1.75848576E12, 2115.999999999998], [1.75848558E12, 1248.669999999999], [1.75848588E12, 2022.79], [1.7584857E12, 1907.0200000000004], [1.75848552E12, 835.73]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75848582E12, 1942.0], [1.75848564E12, 1366.6499999999999], [1.75848546E12, 598.65], [1.75848576E12, 1823.0], [1.75848558E12, 1062.8000000000002], [1.75848588E12, 1899.6], [1.7584857E12, 1678.5499999999997], [1.75848552E12, 666.6499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75848582E12, 282.0], [1.75848564E12, 277.0], [1.75848546E12, 281.0], [1.75848576E12, 279.0], [1.75848558E12, 279.0], [1.75848588E12, 282.0], [1.7584857E12, 277.0], [1.75848552E12, 279.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75848582E12, 438.0], [1.75848564E12, 418.0], [1.75848546E12, 374.0], [1.75848576E12, 412.0], [1.75848558E12, 413.5], [1.75848588E12, 434.0], [1.7584857E12, 436.5], [1.75848552E12, 392.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75848588E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 346.5, "minX": 7.0, "maxY": 885.0, "series": [{"data": [[8.0, 501.5], [9.0, 459.0], [10.0, 565.5], [11.0, 476.0], [12.0, 507.5], [13.0, 514.0], [14.0, 459.0], [15.0, 454.5], [16.0, 463.5], [17.0, 433.0], [18.0, 437.0], [19.0, 423.0], [20.0, 422.0], [21.0, 401.0], [22.0, 410.0], [23.0, 396.0], [24.0, 387.0], [25.0, 380.0], [26.0, 381.5], [27.0, 356.0], [28.0, 358.0], [7.0, 885.0], [29.0, 346.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 342.5, "minX": 7.0, "maxY": 884.0, "series": [{"data": [[8.0, 494.5], [9.0, 457.0], [10.0, 550.5], [11.0, 467.5], [12.0, 481.0], [13.0, 486.0], [14.0, 447.5], [15.0, 446.0], [16.0, 451.0], [17.0, 416.0], [18.0, 426.0], [19.0, 411.0], [20.0, 416.0], [21.0, 394.0], [22.0, 400.0], [23.0, 385.0], [24.0, 377.0], [25.0, 373.5], [26.0, 373.5], [27.0, 350.5], [28.0, 355.5], [7.0, 884.0], [29.0, 342.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.6, "minX": 1.75848546E12, "maxY": 23.766666666666666, "series": [{"data": [[1.75848582E12, 16.65], [1.75848564E12, 19.133333333333333], [1.75848546E12, 4.6], [1.75848576E12, 18.15], [1.75848558E12, 20.666666666666668], [1.75848588E12, 9.933333333333334], [1.7584857E12, 18.033333333333335], [1.75848552E12, 23.766666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75848588E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.433333333333334, "minX": 1.75848546E12, "maxY": 23.766666666666666, "series": [{"data": [[1.75848582E12, 16.65], [1.75848564E12, 19.133333333333333], [1.75848546E12, 4.433333333333334], [1.75848576E12, 18.15], [1.75848558E12, 20.666666666666668], [1.75848588E12, 10.1], [1.7584857E12, 18.033333333333335], [1.75848552E12, 23.766666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75848588E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.433333333333334, "minX": 1.75848546E12, "maxY": 23.766666666666666, "series": [{"data": [[1.75848582E12, 16.65], [1.75848564E12, 19.133333333333333], [1.75848546E12, 4.433333333333334], [1.75848576E12, 18.15], [1.75848558E12, 20.666666666666668], [1.75848588E12, 10.1], [1.7584857E12, 18.033333333333335], [1.75848552E12, 23.766666666666666]], "isOverall": false, "label": "Login Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75848588E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.433333333333334, "minX": 1.75848546E12, "maxY": 23.766666666666666, "series": [{"data": [[1.75848582E12, 16.65], [1.75848564E12, 19.133333333333333], [1.75848546E12, 4.433333333333334], [1.75848576E12, 18.15], [1.75848558E12, 20.666666666666668], [1.75848588E12, 10.1], [1.7584857E12, 18.033333333333335], [1.75848552E12, 23.766666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75848588E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

