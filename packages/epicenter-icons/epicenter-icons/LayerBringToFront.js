import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2.5V10M15 5L12 2L9 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.8535 8L21.3982 10.0485C22.2006 10.4102 22.2006 11.5898 21.3982 11.9515L12.7981 15.8279C12.289 16.0574 11.711 16.0574 11.2019 15.8279L2.60175 11.9515C1.79941 11.5898 1.79942 10.4102 2.60176 10.0485L7.14654 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.1813 15.5L21.3982 16.0485C22.2006 16.4102 22.2006 17.5898 21.3982 17.9515L12.7981 21.8279C12.289 22.0574 11.711 22.0574 11.2019 21.8279L2.60175 17.9515C1.79941 17.5898 1.79942 16.4102 2.60176 16.0485L3.81867 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LayerBringToFront',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
