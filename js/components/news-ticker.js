Vue.component("news-ticker", {
    data: function()
    {
        return {
            messages: [
                "modding.net",
                "layer name moment",
                "weird themes",
                "hey, you could make a mod out of this",
                "when the imp- oh wrong mod",
                "basically there is a thi- (softcapped)",
                "incremental thing i guess",
                "omega layers but steam engine",
                "mod.js: powering layers",
                "i ran out of words on my hard drive :(",
                "what if i told you that secret achievements are real",
                "omega layers 2, coming in 2048 years",
                "finally a major release",
                "go visit omega layers ez and sussy layers 2",
                "join the community server",
                "content when",
                "omega engine v-1.0.0: we removed all the features that aren't the main game",
                "218 Jigger 218",
                "1e420 blaze it.",
                "The cookie is a lie.",
                "As you probably know, it is traditional to give gifts made of certain materials to celebrate anniversaries The classic ones are silver at 25 and gold at 50. Here are some little known anniversary gifts: Pineapple - 37 years Hellstone - 66 years Lizardite- 82 years Nitrowhisperin- 86 years Taconite - 95 years Hatchettite - 100 years Electrum - 110 Yakitoda - 111 years years Fordite - 119 years Bloodstone - 120 years Celestite - 125 years Jet - 140 years Petroleum - 145 years Steel - 150 years Cummingtonite - 198 years Concrete - 200 years Laserblue- 210 years Painite - 250 years Parisite - 255 years Parasite - 260 years Carbon Nanotubes - 300 years Mercury - 310 years Martian Soil - 340 years Neptunium - 370 years Uranium - 380 years Plutonium - 390 years Xium - 400 years Blaze rods - 420 years Asbestos - 430 years Gabite - 444 years Crimtane - 666 years Lagga - 777 years",
                "Hello, Vsauce, Michael here. We all know that the 9th dimension doesn't exist, but what is 9? You know it's the number after 8... right? What if... there's a number in between? And no I'm not talking about numbers like 8.5 or 8.76, I'm talking about an integer between 8 and 9. Now all this may sound crazy to you, and it kinda is, but what if, we've missed a number? We've all been taught that 2 comes after 1 and 3 comes after 2, but what if the number that comes after 8 isn't 9? After years of research and experimentation, we've finally found the number. It is dangerous, even knowing its existence will let it consume your mind, but fortunately, we've developed a reverse-containment cell, meaning it's everywhere except here. Our brain has a protection system, that specifically filters out any information regarding this number, that's how we've been able to survive for this long, and why others like us went extinct in the past, but the number has been getting stronger, slowly getting closer to breaking our protection. We've temporary stopped the number from slipping into our memory by using the world-wide memory manipulator located in this room to keep making everyone think that 9 comes after 8 with a side effect that makes everyone think that 9 is evil, but this won't last forever, as the number will keep getting stronger, and will eventually overpower the memory manipulator. That's why you're here, you're one of the most intelligent person here, and we hope you can help us on our journey to defeat that number. Our enemy is not 9, it is the hidden number between 8 and 9.",
                "(Make me sleep) Put me to sleep inside. (I can't sleep) Put me to sleep inside. (Leave me) Whisper my name and give me to the dark. (Make me sleep) Bid my milk to stay. (I can't fall asleep) Before I become done. (Leave me) Leave me to the nothing I've become."
                "Every Incremental needs a News Ticker",
                "1.79769313e308 / 10 -IGN",
                "Powered by RNG",
                "Maybe there are new News here? Nope, just the old news...",
                "The Number limit is above 10↑↑308, good luck!",
                "Your ad here",
                "ζ is Fake News!",
                "Suggest more messages in the Discord!",
                "The Cell is the Powerhouse of the Mitochondria",
                "\"where is the potato layer ?!\" - some pig dude",
                "\"Imagine quoting your name on your news ticker\" - ???",
                "\"if you hit a wall, keep hitting\" -winston churchill",
                "Die, frickin pie - PewDiePie",
                `<span style="color: hsl(0, 100%, 50%)">R</span>`
                +` <span style="color: hsl(45, 100%, 50%)">A</span>`
                +` <span style="color: hsl(90, 100%, 50%)">I</span>`
                +` <span style="color: hsl(135, 100%, 50%)">N</span>`
                +` <span style="color: hsl(180, 100%, 50%)">B</span>`
                +` <span style="color: hsl(225, 100%, 50%)">O</span>`
                +` <span style="color: hsl(270, 100%, 50%)">W</span>`,
                "This definitly beats Mega Layers! -RΨZΞΠ 9 935ΘX",
                "hey, I bet this isnt a newsticker. Or is it?",
                "(╯°□°）╯︵ ┻━┻   -   TableFlipper07",
                "Don't click the X at the top right, it's a game breaking bug!",
                "Nerf This!",
                "To nerf, or not to nerf. That is the Question!",
                "A news ticker. How original.",
                () =>
                {
                    let res = "";
                    for(let i = 0; i < Math.floor(Math.random() * 6) + 4; i++)
                    {
                        let seed = Date.now() + i;
                        res += Utils.createRandomWord(Math.floor(Math.random() * 10) + 4, seed) + " ";
                    }
                    return res + "-" + Utils.createRandomWord(Math.floor(Math.random() * 3) + 4, Date.now() + 20) + " " + Utils.createRandomWord(Math.floor(Math.random() * 3) + 4, Date.now() + 21);
                },
                () => "This Number is randomly generated -> " + Math.pow(10, Math.random() * 3.01).toFixed(2) +
                    ". If it's above 1,000, consider yourself lucky!",
                () => `<a href="https://tw.2s4.me" target="_blank">get Layer ` + PrestigeLayer.getNameForLayer(game.metaLayer.active ? game.metaLayer.layer.add(1).floor() : game.layers.length) + ` now [working 2020]</a>`,
                () => functions.formatNumber(game.metaLayer.active ? game.metaLayer.getApproxAlpha() : game.layers[0].resource, 2, 0, 1e9) + " α? That's rookie numbers",
                () => "Motto of the Day: " + Utils.getMOTD()
            ],
            currentMessage: "",
            messageIndex: -1
        }
    },
    computed: {
        animationDuration: function()
        {
            return 10 + 0.1 * this.currentMessage.replace(/<.*?>/g, "").length;
        }
    },
    methods: {
        getMessage: function()
        {
            const arr = Array.from(this.messages);
            if(this.messageIndex !== -1)
            {
                arr.splice(this.messageIndex, 1);
            }
            const index = Math.floor(Math.random() * arr.length);
            this.messageIndex = index;
            const element = arr[index];
            this.currentMessage = typeof element === "string" ? element : element();
        }
    },
    mounted: function()
    {
        this.getMessage();
        this.$refs.message.onanimationiteration = e =>
        {
            const anim = this.$refs.message.style.animation.slice();
            this.getMessage();
            this.$refs.message.style.animation = "none";
            void this.$refs.message.offsetWidth; //very black magic
            this.$refs.message.style.animation = anim;
            Vue.nextTick(() =>
            {
                if(this.$refs.message.style.animationDuration === "")
                {
                    this.$refs.message.style.animationDuration = this.animationDuration + "s";
                }
            });
        };
    },
    template: `<div class="news-ticker">
    <span ref="message" :style="{'animation-duration': animationDuration + 's'}" v-html="currentMessage"></span>
</div>`
})
