import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.7442 11.5L21.3982 14.0485C22.2006 14.4102 22.2006 15.5898 21.3982 15.9515L12.7981 19.8279C12.289 20.0574 11.711 20.0574 11.2019 19.8279L2.60175 15.9515C1.79941 15.5898 1.79942 14.4102 2.60176 14.0485L8.25583 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 4.5V15M15 7L12 4L9 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LayerBringForward',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
