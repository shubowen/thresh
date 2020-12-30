/**
* MIT License
*
* Copyright (c) 2020 ManBang Group
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

#import "ThreshJSChannelManager.h"

static NSMutableDictionary *_jsChannelDic;

@implementation ThreshJSChannelManager

+ (ThreshJSChannelManager *)sharedMgr {
    
    static ThreshJSChannelManager *instance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[ThreshJSChannelManager alloc] init];
        _jsChannelDic = @{}.mutableCopy;
    });
    return instance;
}

- (ThreshJSCoreChannel *)channelWithModule:(NSString *)moduleName supportSingleContext:(BOOL)support {
    
    ThreshJSCoreChannel *channel;
    if (moduleName && support) {
        
        channel = [_jsChannelDic objectForKey:moduleName];
        if (channel == nil) {
            channel = [ThreshJSCoreChannel new];
            [_jsChannelDic setValue:channel forKey:moduleName];
        }
    } else {
        channel =  [ThreshJSCoreChannel new];
    }
    return channel;
}

@end
