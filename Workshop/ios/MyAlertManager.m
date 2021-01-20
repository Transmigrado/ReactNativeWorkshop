//
//  RCTCalendarModule.m
//  Workshop
//
//  Created by Jorge Acosta on 19-01-21.
//

#import "React/RCTBridgeModule.h"
#import "MyAlertManager.h"
#import <UIKit/UIKit.h>

@implementation MyAlertManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(helloWorld:(NSString *) txt andMessage:(NSString *) message)
{
  
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:txt
                                                        message: message
                                                        delegate:self
                                                        cancelButtonTitle:@"OK"
                                                        otherButtonTitles:nil];
    [alert show];
  });
 
 
}

@end
