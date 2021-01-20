//
//  RNTMapManager.m
//  Workshop
//
//  Created by Jorge Acosta on 19-01-21.
//

#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNTMap)
- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
