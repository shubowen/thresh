/*
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
package io.manbang.frontend.thresh_example;

import io.flutter.plugin.common.MethodChannel;
import io.flutter.view.FlutterView;
import io.manbang.frontend.thresh.channel.MethodChannelModule;
import io.manbang.frontend.thresh.runtime.EngineService;
import io.manbang.frontend.thresh.runtime.ThreshEngine;

public class ThreshDemoMethodChannel extends MethodChannelModule {

    public ThreshDemoMethodChannel(FlutterView flutterView, EngineService engineService) {
        super(flutterView,engineService);
    }

    @Override
    public Object dispatchModuleChannelEvent(String module, String method, Object params,
                                             MethodChannel.Result result) {
        return null;
    }
}
