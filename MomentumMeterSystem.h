#ifndef MOMENTUM_METER_SYSTEM_H
#define MOMENTUM_METER_SYSTEM_H

#include <string>
#include <vector>
#include <memory>


class MomentumMeter;
class MomentumEvent;
class HomeTeamModifier;
class UIMomentumDisplay;
class PlayerPerformanceTracker;


class MomentumMeter {
private:
    float currentMomentum;
    float maxMomentum;
    float thresholdForBoost;
    std::vector<std::shared_ptr<MomentumEvent>> momentumEvents;

public:
    MomentumMeter(float max, float threshold);

    void addEvent(std::shared_ptr<MomentumEvent> event);
    void updateMomentum();
    float getMomentum() const;
    bool isBoostActive() const;
    void resetMomentum();
};


class MomentumEvent {
protected:
    float momentumValue;
    std::string description;

public:
    MomentumEvent(float value, const std::string& desc);
    virtual float getValue() const;
    virtual std::string getDescription() const;
    virtual ~MomentumEvent() = default;
};


class HomeTeamModifier {
private:
    float boostMultiplier;
    bool boostActive;

public:
    HomeTeamModifier();
    void applyBoost(MomentumMeter& meter);
    void deactivateBoost();
    bool isBoostOn() const;
    float getMultiplier() const;
};


class UIMomentumDisplay {
public:
    void render(float momentumPercent, bool isBoostActive);
    void showBoostAnimation();
    void updateColor(float momentumPercent);
};


class PlayerPerformanceTracker {
private:
    std::vector<std::shared_ptr<MomentumEvent>> generatedEvents;

public:
    void recordPlay(const std::string& playType, bool success);
    std::vector<std::shared_ptr<MomentumEvent>> getRecentEvents() const;
    void clearEvents();
};

#endif
