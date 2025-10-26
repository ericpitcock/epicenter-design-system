import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.9925 7.43158C14.4275 8.36924 13.3994 8.99636 12.225 8.99636C10.4417 8.99636 8.99609 7.55077 8.99609 5.76755C8.99609 4.59303 9.62322 3.565 10.5609 3', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 3.99902H14.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.9923 12.9644L16.007 16.0068M18.9923 12.9644V8C19.0177 7.04711 20.1619 6 21 6V6C21.5523 6 22 6.44772 22 7V13.718C22 14.2208 21.8106 14.7051 21.4696 15.0746L16 20.9999H12V15.4924L15.7476 12.1296C15.9657 11.9925 16.4214 11.7144 17.0313 11.7569C18.1592 11.8355 18.5492 12.6064 18.9923 12.9644Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.00771 12.9644L7.99298 16.0068M5.00771 12.9644V8C4.98233 7.04711 3.83806 6 3 6V6C2.44772 6 2 6.44772 2 7V14.109C2 14.3604 2.09469 14.6026 2.2652 14.7873L8 20.9999H12V15.4924L8.25242 12.1296C8.03427 11.9925 7.57861 11.7144 6.96866 11.7569C5.84075 11.8355 5.45078 12.6064 5.00771 12.9644Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Dua',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
