DateTime.Calendar.Test.CET = {};

DateTime.Calendar.Test.CET.testCreation_BeforeDST = function() {
    var calendar = new DateTime.Calendar(time(2011, 3, 27, 0, 59, 59, 999), DateTime.TimeZone.CET);

    assertEquals(2011, calendar.year());
    assertEquals(3, calendar.month());
    assertEquals(27, calendar.date());
    assertEquals(1, calendar.hour());
    assertEquals(59, calendar.minute());
    assertEquals(59, calendar.second());
    assertEquals(999, calendar.millis());
};

DateTime.Calendar.Test.CET.testCreation_StartDST = function() {
    var calendar = new DateTime.Calendar(time(2011, 3, 27, 1, 0, 0, 0), DateTime.TimeZone.CET);

    assertEquals(2011, calendar.year());
    assertEquals(3, calendar.month());
    assertEquals(27, calendar.date());
    assertEquals(3, calendar.hour());
    assertEquals(0, calendar.minute());
    assertEquals(0, calendar.second());
    assertEquals(0, calendar.millis());
};

DateTime.Calendar.Test.CET.testCreation_StopDST = function() {
    var calendar = new DateTime.Calendar(time(2011, 10, 30, 0, 59, 59, 999), DateTime.TimeZone.CET);

    assertEquals(2011, calendar.year());
    assertEquals(10, calendar.month());
    assertEquals(30, calendar.date());
    assertEquals(2, calendar.hour());
    assertEquals(59, calendar.minute());
    assertEquals(59, calendar.second());
    assertEquals(999, calendar.millis());
};

DateTime.Calendar.Test.CET.testCreation_AfterDST = function() {
    var calendar = new DateTime.Calendar(time(2011, 10, 30, 1, 0, 0, 0), DateTime.TimeZone.CET);

    assertEquals(2011, calendar.year());
    assertEquals(10, calendar.month());
    assertEquals(30, calendar.date());
    assertEquals(2, calendar.hour());
    assertEquals(0, calendar.minute());
    assertEquals(0, calendar.second());
    assertEquals(0, calendar.millis());
};

DateTime.Calendar.Test.CET.testGetMills_BeforeDST = function() {
    var calendar = new DateTime.Calendar(0, DateTime.TimeZone.CET).year(2011).month(3).date(27).hour(1).minute(59).second(59).millis(999);

    assertEquals(time(2011, 3, 27, 0, 59, 59, 999), calendar.time());
};

DateTime.Calendar.Test.CET.testGetMills_NotExistent = function() {
    var calendar = new DateTime.Calendar(0, DateTime.TimeZone.CET).year(2011).month(3).date(27).hour(2).minute(0).second(0).millis(0);

    assertEquals(time(2011, 3, 27, 1, 0, 0, 0), calendar.time());
};

DateTime.Calendar.Test.CET.testGetMills_StartDST = function() {
    var calendar = new DateTime.Calendar(0, DateTime.TimeZone.CET).year(2011).month(3).date(27).hour(3).minute(0).second(0).millis(0);

    assertEquals(time(2011, 3, 27, 1, 0, 0, 0), calendar.time());
};

DateTime.Calendar.Test.CET.testCreation_StopDST = function() {
    var calendar = new DateTime.Calendar(0, DateTime.TimeZone.CET).year(2011).month(10).date(30).hour(2).minute(59).second(59).millis(999);

    assertEquals(time(2011, 10, 30, 0, 59, 59, 999), calendar.time());
};

DateTime.Calendar.Test.CET.testCreation_AfterDST = function() {
    var calendar = new DateTime.Calendar(0, DateTime.TimeZone.CET).year(2011).month(10).date(30).hour(3).minute(0).second(0).millis(0);

    assertEquals(time(2011, 10, 30, 1, 0, 0, 0), calendar.time());
};