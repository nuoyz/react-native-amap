package com.testamap;

import com.amap.api.maps.MapView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by ASUS on 2017/4/26.
 */

public class ReactAmapManager extends SimpleViewManager<MapView> {
    public static final String REACT_CLASS = "MapView";
   // private Object mCallerContext;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public MapView createViewInstance(ThemedReactContext context) {
        MapView mapView = new MapView(context);//mCallerContext
        mapView.onCreate(null);
        return mapView;
    }
}
