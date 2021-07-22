import styled from "styled-components";

function Background() {
    return (
        <Container>
            <div className="theme Roboto_50pt_Black_L">Whitepaper</div>
            <div className="title Roboto_30pt_Black_L">1. Background</div>
            <div className="text Roboto_20pt_Regular_L">
                Companies constantly look for new means of production while the
                choices made by the consumers expand and evolve the free market. They
                also find ways to overcome the barriers created from the collected
                data and accessibility via outsourcing, which creates new trends and
                technology. Among the various fields, the “Sharing Economy” has been
                in the spotlight due to its rapid growth.
            </div>
            <div className="text Roboto_20pt_Regular_L">
                The Sharing Economy focuses less on ownership and more on the idea of sharing and borrowing, hoping to lessen the use of disposable items while strengthening renewables. Especially with the rise of single person homes, smart spending, and the extended pandemic, the consumption paradigm has shifted, impacting the current traditional way of shared economy for both individuals and enterprises. To add to this, with global warming becoming more of a serious issue, the international responses to environmentalism have also been accelerating the shared economy platform. For instance, extreme weather, food supply disruptions, and increased wildfire are the effect of climate change caused by the excessive emission of Carbon Dioxide and people are now well-aware of the fact that Carbon emission has far-ranging effect on their everyday life. With the experience of changes on everyday life, government and consumers started to make more environmental decisions. Cars with combustion engines are less favored than Electric Vehicles (EV) and as a result, we see the rapid increase of consumer’s needs on EV and EV related services these days. Governments in major countries have already decided to mandate “most new cars must be electric by 2030” and started to subsidies Electric Vehicle related services and platforms such as EV charging station.
            </div>
            <div className="text Roboto_20pt_Regular_L">
                Services derived from this trend have already been activated and utilized in major markets such as the US, Europe and Asia and they have been finding their places throughout the generations. For example, a major sharing service in the lodging industry is Airbnb, while the transportation industry has Uber. In addition, the global development of the internet infrastructure and IoT along with various wireless internet technologies in conjunction with the increasingly diverse needs of consumers have evolved traditional offline services into new areas. The combination of GPS and IoT services along with the shared economy has created shared offices, automobiles, parking spaces, lodging, and even shared laptops, bicycles, and many more services for various platforms to meet consumer’s needs. On top of this, consumers started to lead a new trend called “environmental-friendly sharing economy” with further electric power focused approaches.
            </div>
        </Container>
    )
}
const Container = styled.div`
    width: 750px;
    .theme {
        margin-bottom: 80px;
        text-shadow: 0 0 1px white, 0 0 15px white;
    }
    .title {
        margin-top: 60px;
        margin-bottom: 40px;
    }
    .text {
        margin-bottom: 40px;
    }
`
export default Background;