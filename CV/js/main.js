angular.module('app',['ui.router','ui.bootstrap']);
angular.module('app').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
    //HOME
    $stateProvider.state('Home', {
        url: '/Home',
        templateUrl: 'partials/Home.html'
    });
    $stateProvider.state('Awards', {
        url: '/Awards',
        templateUrl: 'partials/Awards.html'
    });
    $stateProvider.state('Patents', {
        url: '/Patents',
        templateUrl: 'partials/Patents.html'
    });
    $stateProvider.state('Contact', {
        url: '/Contact',
        templateUrl: 'partials/Contact.html'
    });
    $stateProvider.state('Employment', {
        url: '/Employment',
        templateUrl: 'partials/Employment.html',
        controller: "employmentCtl"
    });
    $stateProvider.state('Qualifications', {
        url: '/Qualifications',
        templateUrl: 'partials/Qualifications.html',
        controller: "qualificationsCtl"
    });
    $stateProvider.state('Publications', {
        url: '/Publications',
        templateUrl: 'partials/Publications.html',
        controller: "publicationsCtl"
    });
    $stateProvider.state('Programming', {
        url: '/Programming',
        templateUrl: 'partials/Programming.html'
    })
});

angular.module('app').factory('EmploymentDataFactory', function(){
    return {
      jobs: [
      { post:'Snr Post Doctoral Researcher',
        employer:'Swansea University',
        dates:'2016-',
        description:'At Swansea University I have two current research projects. The first is in the visualization of open source data networks. This work is for the UK DVLA; it is part of a multi discipline multi site project involved in understanding and quantifying the nature of data privacy. My specific task is to create an online tool for visualizing the connections between separate open source data sets and to graphically show networks of interaction between attributes and entities between and within data sets. The second project is an investigation into the creation and use  of data glyphs for multivariate data objects. As part of this work I have created an Android game similar to the popular game “Dots”. This game is part of an investigation into the use of gamification for measuring user perception of visual data'
    },
    { post:'PGCE Placment',
      employer:'Cardiff University',
      dates:'2015-2016',
      description:'I am at heart a programmer, with a real passion for programming,  who wishes to teach others how to develop quality code. I want to pass on my enthusiasm and encourage my students to love to code as much as I do. To make this possible I undertook and was awarded a PGCE in post compulsory education from Cardiff University. This course included a very successful placement within the School of Computer Science & Informatics at Cardiff University, teaching in lecture and lab environments at both undergraduate and postgraduate levels. The highlight of my teaching practice was that my students nominated me for an Enriching student life award” which earned me a mug; it is my prized possession.'
    },
    { post:'Snr Computational Biology Research Assistant',
      employer:'Computation Institute, University of Chicago USA',
      dates:'2012-2014',
      description:'At  the University of Chicago I contributed to the US Department of Energy KBase. KBase is an open platform comparative functional  genomics knowledge base. Here I used the data mining library WEKA within a Java program to predict the phenotypes of bacteria from their genotypes. I was also the lead frontend developer for another joint project  with Northwestern University on a metabolic database MINE.  This was a much smaller  project with two main developers: myself and a backend cheminformatics expert. This  project utilised the latest front end web development libraries, AngularJS and Bootstrap, along  with the specialist cheminformatics library from ChemAxon. The paper on this work has been accepted for the Journal of Cheminformatics'
    },
    { post:'Post doctoral Researcher',
      employer:'Dept Surgery, University of Chicago USA',
      dates:'2009-2011',
      description:'At Northwestern University I uesed cellular automata models of imumne system cells to  discover general rules of individual cell behaviour and how this gave rise to their collective behaviour. To this end I developed the idea of Computational Cellular Ethology (CCE). CCE is the evaluation of cellular behaviour using a subsumption architecture of information-processing modules. This method has its roots in behavioural robotics, and allows the construction of a control structure for a cell by treating it as an autonomous agent. As a demonstration of this approach I presented a CCE agent based model of cellular foraging movement that mirrored an experimentally recognized bi-modal of random walk behaviour. This type of behavioural representation provided an insight into the process of cellular motility, both in terms of characterizing the roles of biochemical subsystems and identifying control structures involved in chemotaxis and tissue patterning.'
    },
    { post:'Post Doctoral Researcher',
      employer:'Queensland University of Technology Australia',
      dates:'2007-2009',
      description:'At Queensland University of Technology  I was the principal computational modeller in a project to  simulate human skin through mathematical and in silico experimentation. The principle aims of this project were to develop hybrid multi–scale models of the temporal and spatial dynamics of human skin, and to use these models, to represent in silico, laboratory-grown human skin equivalent (HSE) constructs. I  concentrated on discovering general rules of individual cell behaviour and how their collective behaviour gives rise to tissue form and function. I treated each cell as a finite state machine subsuming the cellular biochemical networks into a set  of simple rules that are driven purely by the state of the cell and its immediate neighbours. The research has produced two interesting models. The first is a cellular automata that demonstrated a mechanism modulating the differentiation and regulation of the layering of epithelial tissue that depends on the establishment and maintenance of a calcium gradient (observed in both human skin and experimental constructs). The model shows that the calcium gradient and the differentiated tissue are an autopoiesis system with the calcium gradient maintained by the differentiating tissue while in turn the continued differentiation of the cells, and hence the layered structure of the epidermis, is driven by the calcium gradient. The second used a simple rule base of cell states to describe which cells within the epidermis are proliferating and how are the cell linages maintained and spatially organized. The simulation showed that the two standard models used to describe  proliferation had logical shortcomings in their predictions. The CA new model added a new but very limited set of local cell rules that again produced a self organising system that maintained cell populations over a range of conditions.'
    },
    { post:'Post Doctoral Researcher',
      employer:'CSIRO Brisbane Australia',
      dates:'2005-2007',
      description:'At the CSIRO in Brisbane, Australia I used cellular automata models to investigate the dynamics of invasion biology. Plant invasion is of particular relevance to my interest in emergent behaviours in biological systems. The susceptibility of vegetation to invasion is a high-level property because the ability of an invader to enter into  an established plant community is a function of both the invading plant and the collective behaviour of the vegetation. One of the most important aspects of this project has been its concentration on the application of simple low-level rules of community construction. To this end I  concentrated on discovering general rules of invasion by asking what information on the invasive behaviour and establishment of plant species can be obtained for free, i.e. with no prior information about plant ecology. My general methodology was to use two neutral ecological models. The neutral theory of community structure and neutral landscape model that describes a species "percolation" across a connected landscape.'
    },
    { post:'NRC Research Fellow',
      employer:'EPA Corvallis USA',
      dates:'2003-2005',
      description:'The US NRC research fellowships are competitively awarded on the basis of an original research proposal submitted by the applicant that fulfils the twin criteria of original scientific undertaking and relevance to required new knowledge.My research proposal was accepted for funding and undertaken at the research division of the USA Environmental Protection Agency in Corvallis, Oregon. The  project’s aims were to obtain an understanding of the complicated behaviour of ecosystem population dynamics by means of a model involving realistic first-order approximations to vegetative and reproductive plant strategies, pollination and Mendelian genetics, and to apply these in a spatially explicit manner to investigations of the potential downstream ecological effects of  genetically modified (GM) plants. The model was also to be used to answer specific safety assessment questions associated with the introduction of a GM grass currently under study at the EPA.'
    },
    { post:'Post Doctoral Researcher',
      employer:'University of Glamorgan UK',
      dates:'2001-2003',
      description:'In a post-doctoral position at the University of Glamorgan in Wales I applied a range of data mining techniques to the modelling of breathing patterns in cystic fibrosis sufferers . As part of a proposal for producing a gas exchange model of the lung I also began development of a cellular automata model of angiogenesis.'
    },
    { post:'Senior Software Engineer',
      employer:'Momentum Healthcare, Cardiff UK',
      dates:'1998-2001',
      description:'I was the senior programmer for a start-up biotech company, Momentum Health Care (later acquired by Cellomics of the USA).  Here I applied MSc training in the area of neural networks to the field of data mining; in the process producing three patentable drug discovery software tools.'
    },
    { post:'Game programmer',
      employer:'Cyberlife Technologies, Cambridge UK',
      dates:'1997-1998',
      description:'At Cyberlife I was designated a ‘cyber ecologist’ and participated in the construction of an artificial ecosystem that was used in a version of the company’s main product: the computer game, Creatures.'
    },
    { post:'Multimedia Programmer',
      employer:'MHA Productions, London UK ',
      dates:'1996-1997',
      description:'The production of screen savers and web page embedded Java  games for film promotion in cluding Star Treck First Contact, Twelve monkys and Twister '
    },
    { post:'Research Associate',
      employer:'UCPE, University of Sheffield UK',
      dates:'1991-1996',
      description:' At UCPE I was responsible for the mathematical modelling of plant functional types for the DoE’s core model project for climate change and also the spatial modelling of plant populations for the DoE’s Key Habitat project on atmospheric deposition. This work was expanded on and became the core to the unit’s contribution to two EU framework projects on C02 and ozone effects on plant communities. I won a Brittish Council funded exchange with AgResearch in New Zealand. Here I applied computer simulation to the problem of below ground competition for nutrients by plant root systems in porous soil. The methodology was a hybrid of L-systems,cellular automata and lattice gas. The further development and refinement of these methodologies led directly to the self-assembling plant models, which was to form the basis of my research for the award of a PhD by the University of Sheffield'
    },
    { post:'Research Assistant',
      employer:'UKAE, Harwell UK',
      dates:'1987-1991',
      description:'At the United Kingdom Atomic Energy Authority (UKAEA) I was involved in modelling the microbial ecology of concrete encapsulated low-level nuclear waste for the UKAEA, and the modelling of microbial degradation of domestic refuse sites for the UK Department of Environment (DoE).'
    },
    { post:'Scientific Officer',
      employer:'Department of Microbiology, University of Surrey UK',
      dates:'1984-1987',
      description:'As a Scientific Officer at the Department of Microbiology, University of Surrey my areas of research were the design of computer expert systems for controlling chemostats and modelling of microbial metabolism'
    }
    ]};
});

angular.module('app').controller('employmentCtl', function($scope,EmploymentDataFactory){
    $scope.jobs = EmploymentDataFactory.jobs;
    $scope.$parent.isopen = ($scope.$parent.default === $scope.item);

    $scope.$watch('isopen', function (newvalue, oldvalue, $scope) {
                    $scope.$parent.isopen = newvalue;
                });
});

angular.module('app').factory('QualificationsDataFactory', function(){
    return {
      qualifications: [
    { award:'PhD Individual based models in plant ecology',
      institution:'University of Sheffield UK',
      dates:'2001'
    },
    { award:'PGCE (Post-Compulsory) (Merit)',
      institution:'University of Cardiff',
      dates:'2015'
    },
    { award:'MSc Computing (Distinction)',
      institution:'University of Cardiff',
      dates:'2012'
    },
    { award:'MSc Evolutionary and Adaptive Systems',
      institution:'University of Sussex',
      dates:'1996'
    },
    { award:'B.Sc. Microbiology 2.ii Hons',
      institution:'University of London (Queen Elizabeth College)',
      dates:'1984'
    },
    { award:'Foundation Art',
      institution:'Norwich School of Art',
      dates:'1979'
    }
    ]};
});

angular.module('app').controller('qualificationsCtl', function($scope,QualificationsDataFactory){
    $scope.qualifications = QualificationsDataFactory.qualifications;

});


angular.module('app').factory('PublicationsDataFactory', function(){
    return {
      papers: [
      {
          authors:' Christopher Henry; Claudia Lerma-Ortiz; Svetlana Gerdes; Ric Colansanti; Jeffrey Mullen; Aleksey Zhukov; Oceane Frelin; Jennifer Thiaville; Remi Zallot; Ghulam Hasnain; Thomas Niehaus; Neal Conrad; Andrew Hanson; Valerie de Crecy-Lagard',
          date:'2016 in press',
          title:'Systematic identification and analysis of frequent gene fusion events in metabolic pathways',
          publication:'Genome Biology'
      },
    { authors:'J.G. Jeffryes1, R. L.Colastani, M. Elbadawi-Sidhu, T. Kind, T.D. Niehaus, L. J. Broadbelt, A D. Hanson, O. Fiehn, K. E. J. Tyo1, C.S. Henry',
      date:'2015',
      title:'MINEs: Open access databases ofcomputationally predicted enzyme promiscuity products for untargeted metabolomics',
      publication:'Journal of Cheminformatics'
    },
    { authors:'K.L. Olukogbon1, P. Thomas, R.L. Colasanti, B. Hope-Gill and E. M. Williams ',
      date:'2015',
      title:'Breathing patterns and breathlessness in Idiopathic Pulmonary Fibrosis: An observational study',
      publication:'Respirology'
    },
    {authors:'Ric Colasanti, Janaka N. Edirisinghe, Tahmineh Khazaei, José P. Faria, Sam Seaver, Fangfang Xia and Christopher Henry',
     date:'2014',
     title:'Tapping the Wealth of Microbial Data in High-Throughput Metabolic Model Reconstruction.',
     publication:'Metabolic Flux Analysis, Methods in Molecular Biology Volume 1191, 2014, pp 19-45'
    },
     { authors:'Williams, E. M., Powell, T., Eriksen, M., Neill, P., & Colasanti, R.',
        date:'2014',
        title:'A pilot study quantifying the shape of tidal breathing waveforms using centroids in health and COPD',
        publication:'Journal of clinical monitoring and computing, 28(1), 67-74.'
    },
    { authors:'E Williams,T Powell,M Eriksen,P Neill,R Colasanti',
      date:'2013',
      title:'Quantifying COPD-induced changes in tidal breathing waveform shape using centroids',
      publication:'Journal of Clinical Monitoring and Computing '
    },
    { authors:'Colasanti RL',
      date:'2013',
      title:' A naive Bayesian classifier of bacterial Gram stain phenotypes from enzyme functional roles,',
      publication:'A dissertation submitted in partial fulfilment of the requirements for Cardiff University’s Master of Science Degree in Computing'
    },
    { authors:'MWatrud,L.S,King,G.,Londo,J.P, Colasanti,R.L.,Smith,B.S, Waschmann,R.S, and Henry Lee H.E',
      date:'2011',
      title:'Changes in constructed Brassica communities treated with glyphosate drift',
      publication:'Ecological Applications 21:2, 525-538'
    },
    { authors:'Colasanti, Ricardo.  Gary, An.',
      date:'2010',
      title:'The abstracted biological computational unit: Introduction of a recursive descriptor for multiscale computational modeling of biological systems',
      publication:'Journal of Critical Care 24.3 (2009): e35-e36.'
    },
    { authors:'Graeme J. Pettet, Colin P. Please, Ricardo L.Colasanti, Rebecca and A. Dawson',
      date:'2008',
      title:'A cellular automata simulation of calcium driven tissue diﬀerentiation in human skin equivalent models ',
      publication:'Automata-2008.Theory and Applications of Cellular Automata. Luniver Press.'
    },
    { authors:'Van Klinken, R. D., R. Colasanti, and Y. M. Buckleyzr.',
      date:'2008',
      title:'The dynamics of invasion as a function of landscape connectivity',
      publication:' In Proceedings of the 16th Australian Weeds Conference, Cairns Convention Centre, North Queensland, Australia, 18-22 May, 2008., pp. 130-132. '
    },
    { authors:'Colasanti RL, Hunt R, Watrud L',
      date:'2007',
      title:'A simple cellular automaton model for high-level vegetation dynamics',
      publication:'Ecological modelling 203, 363-374'
    },
    { authors:'Hunt R, Colasanti RL ',
      date:'2007',
      title:'Self-assembling Plants and Integration across Ecological Scales',
      publication:'Annals of Botany 99: 1023–1034'
    },
    { authors:'Wimpenny J, Colasanti RL',
      date:'2005',
      title:'A simple cellular automaton model for coaggregation',
      publication:'Biofilms, 1: 369-375'
    },
    { authors:'Colasanti RL , Morris MJ, Madgwick RG, Sutton L and Williams M',
      date:'2004 ',
      title:'Analysis of tidal breathing profiles in cystic fibrosis and COPD',
      publication:'Chest;125:901-8'
    },
    { authors:'Colasanti RL, Hunt R. and Askew A.P.',
      date:'2001',
      title:' A self-assembling model of resource dynamics and plant growth incorporating plant functional types',
      publication:'Functional Ecology 15: 676-687'
    },
    { authors:'Wimpenny JWT, Colasanti R',
      date:'1997',
      title:'A more unifying hypothesis for biofilm structures - a reply',
      publication:'FEMS microbiology ecology, 1997, Vol.24, No.2, pp.185-186'
    },
    { authors:'Wimpenny JWT, Colasanti RL',
      date:'1997',
      title:'A unifying hypothesis for the structure of microbial biofilms based on cellular automaton models',
      publication:'FEMS microbiology ecology, 1997, Vol.22, No.1, pp.1-16'
    },
    { authors:'Colasanti RL, Hunt R',
      date:'1997',
      title:' Real Botany with Artificial Plants: A Dynamic, Self-Assembling, Plant Model for Individuals and Populations',
      publication:'In: Husbands P, Harvey D, eds. Fourth European Conference on Artificial Life. MIT Press'
    },
    { authors:'Colasanti RL, Hunt R.',
      date:'1997',
      title:' Resource dynamics and plant growth: a self-assembling model for individuals, populations and communities',
      publication:'Functional Ecology 11:133-145'
    },
    { authors:'Hodgson JG, Montserrat G, Alberto F, Garcia-Ruiz JM, Guerrero J, Colasanti RL.',
      date:'1994',
      title:' A comparison of the functional characteristics of plants from sedimenting and eroded areas with particular reference to the gypsum hills of the Ebro Depression',
      publication:'In: Arniez J,Garcia-Ruiz JM, Gomez V, eds. Geomorfologia en Espana. Sociedad Espanola de GeomorfologÃa, Lograono, 239-251.'
    },
    { authors:'Hodgson JG, Colasanti R, Phillipson P, Leach S, Montgomery S, Hunt R',
      date:'1994',
      title:'A simple method for monitoring grassland vegetation',
      publication:'In: Haggar RJ, Peel S, eds. Grassland Management and Nature Conservation. Reading: BGS Occasional Symposium No 28: 286-288'
    },
    { authors:'Hodgson JG, Colasanti RL, Alberto F, Montserrat G, Romo A',
      date:'1993',
      title:'Plant strategies and other functional attributes of vegetation from the arid lands: ',
      publication:'Monegros. Zaragoza: Instituto Pirenaico de Ecologa'
    },
    { authors:'Colasanti RL. Grime JP',
      date:'1993',
      title:'Resource dynamics and vegetation processes: A deterministic model using two dimensional cellular automata',
      publication:'Functional Ecology 7: 169-177'
    },
    { authors:'Colasanti RL',
      date:'1992',
      title:'Cellular automata models of microbial colonies',
      publication:'Binary 24: 19-22'
    },
    { authors:'Colasanti RL',
      date:'1992',
      title:'Discussions of the possible use of neural network algorithms in ecological modelling',
      publication:'Binary 3: 13-15'
    },
    { authors:'Colasanti RL, Rosever A, Coutts D, Pugh SYR',
      date:'1991',
      title:'The Microbiology program for UK Nirex',
      publication:'Experientia 47: 560-572'
    },
    { authors:'Colasanti RL',
      date:'1988',
      title:'Modular simulation of a microbial ecosystem with Turbo PROLOG',
      publication:'Binary 13: 24-27'
    }
    ]};
});


angular.module('app').controller('publicationsCtl', function($scope,PublicationsDataFactory){
    $scope.papers = PublicationsDataFactory.papers;
});
