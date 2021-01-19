//
//  RCTCalendarModule.m
//  Workshop
//
//  Created by Jorge Acosta on 19-01-21.
//

#import <Foundation/Foundation.h>
#import "RCTCalendarModule.h"

@implementation RCTCalendarModule

RCT_EXPORT_MODULE(RCTCalendarModule);

RCT_EXPORT_METHOD(helloWorld:(NSString *) name)
{
  NSLog(@"HOLA MUNDO!");
}

@end
